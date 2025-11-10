import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const API_KEY = process.env.REACT_APP_YOUTUBE_API_KEY;
const CHANNEL_ID = process.env.REACT_APP_CHANNEL_ID;

interface Video {
    id: string;
    title: string;
    description: string;
    publishedAt: string;
    channelTitle: string;
    thumbnail: string;
    duration: string;
    viewCount: string;
    likeCount?: string;
    commentCount?: string;
}

interface VideosResponse {
    videos: Video[];
    nextPageToken?: string;
    prevPageToken?: string;
}

export const useChannelVideosWithoutShorts = (
  maxResults = 12,
  pageToken?: string
) => {
    return useQuery<VideosResponse>({
        queryKey: ['channelVideos', CHANNEL_ID, pageToken],
        enabled: !!CHANNEL_ID,
        queryFn: async () => {
            // 1. Получаем uploads playlist ID
            const channelRes = await axios.get('https://www.googleapis.com/youtube/v3/channels', {
                params: {
                    part: 'contentDetails',
                    id: CHANNEL_ID,
                    key: API_KEY,
                },
            });

            const uploadsPlaylistId =
              channelRes.data.items[0].contentDetails.relatedPlaylists.uploads;

            // 2. Получаем видео с постраничной навигацией
            const playlistRes = await axios.get(
              'https://www.googleapis.com/youtube/v3/playlistItems',
              {
                  params: {
                      part: 'contentDetails',
                      playlistId: uploadsPlaylistId,
                      key: API_KEY,
                      maxResults,
                      pageToken, // <- вот это добавлено
                  },
              }
            );

            const videoIds = playlistRes.data.items.map(
              (item: any) => item.contentDetails.videoId
            );

            if (videoIds.length === 0)
                return {
                    videos: [],
                    nextPageToken: playlistRes.data.nextPageToken,
                    prevPageToken: playlistRes.data.prevPageToken,
                };

            // 3. Получаем детали видео
            const videosRes = await axios.get('https://www.googleapis.com/youtube/v3/videos', {
                params: {
                    part: 'snippet,contentDetails,statistics',
                    id: videoIds.join(','),
                    key: API_KEY,
                },
            });

            const filtered = videosRes.data.items.filter((item: any) => {
                const duration = item.contentDetails.duration;
                const match = duration.match(/PT(?:(\d+)M)?(?:(\d+)S)?/);
                const minutes = parseInt(match?.[1] || '0', 10);
                const seconds = parseInt(match?.[2] || '0', 10);
                return minutes > 5 || (minutes === 5 && seconds > 0); // исключаем Shorts
            });

            return {
                videos: filtered.map((item: any) => ({
                    id: item.id,
                    title: item.snippet.title,
                    description: item.snippet.description,
                    publishedAt: item.snippet.publishedAt,
                    channelTitle: item.snippet.channelTitle,
                    thumbnail: item.snippet.thumbnails.medium.url,
                    duration: item.contentDetails.duration,
                    viewCount: item.statistics.viewCount,
                    likeCount: item.statistics.likeCount,
                    commentCount: item.statistics.commentCount,
                })),
                nextPageToken: playlistRes.data.nextPageToken,
                prevPageToken: playlistRes.data.prevPageToken,
            };
        },
        staleTime: 1000 * 60 * 10,
    });
};
