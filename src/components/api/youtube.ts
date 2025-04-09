// api/youtube.ts

const API_KEY = 'AIzaSyA_trhjpAFdBwlu5VTTGB1RENPvzv95pB4';

export async function fetchChannelVideos(channelId: string) {
  // Шаг 1: Получаем uploads playlist ID
  const channelRes = await fetch(
    `https://www.googleapis.com/youtube/v3/channels?part=contentDetails&id=${channelId}&key=${API_KEY}`
  );
  const channelData = await channelRes.json();

  const uploadsId = channelData.items?.[0]?.contentDetails?.relatedPlaylists?.uploads;
  if (!uploadsId) throw new Error('Uploads playlist not found');

  // Шаг 2: Собираем все видео из этого плейлиста
  let nextPageToken = '';
  const allVideos = [];

  do {
    const res = await fetch(
      `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${uploadsId}&maxResults=50&pageToken=${nextPageToken}&key=${API_KEY}`
    );
    const data = await res.json();

    allVideos.push(...data.items);
    nextPageToken = data.nextPageToken || '';
  } while (nextPageToken);

  return allVideos;
}
