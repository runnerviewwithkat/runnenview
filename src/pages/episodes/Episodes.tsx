import { motion } from "framer-motion";
import React, { FC, useState } from "react";

import { IEpisodesProps } from "./episodes.props";
import { PageTitle } from "../../components";

import styles from "./episodes.module.scss";
import { Skeleton } from "@mantine/core";
import { VideoCard } from "../../components/VideoCard/VideoCard";
import { getFormatDate, getIsDateWithinLast3Days } from "../../helpers";
import { useChannelVideosWithoutShorts } from "./query";
import EpisodesSkeleton from "../../components/EpisodesSkeleton/EpisodesSkeleton";

export const Episodes: FC<IEpisodesProps> = () => {
  const { data, isLoading } = useChannelVideosWithoutShorts();
  const [searchValue, setSearchValue] = useState('')

  const filteredItems = data?.filter((item) =>
    item.title.toLowerCase().includes(searchValue.toLowerCase())
  );

  return (
    <motion.section initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <PageTitle withSearch value={searchValue} setValue={setSearchValue}>Episodes</PageTitle>
      <div className={styles.product_grid}>
        {isLoading && (
          <>
            <EpisodesSkeleton />
            <EpisodesSkeleton />
            <EpisodesSkeleton />
            <EpisodesSkeleton />
            <EpisodesSkeleton />
            <EpisodesSkeleton />
            <EpisodesSkeleton />
            <EpisodesSkeleton />
          </>
        )}
        {filteredItems?.map((video: any) => (
          <VideoCard
            likeCount={video.likeCount}
            commentCount={video.commentCount}
            viewCount={video.viewCount}
            isRecent={getIsDateWithinLast3Days(video.publishedAt)}
            date={getFormatDate(video.publishedAt)}
            key={video.id}
            title={video.title}
            thumbnail={video.thumbnail}
            spotifyUrl="https://open.spotify.com/show/6TRR1IVOe4VpjaDZH2M9LD?si=XK3cNdXMQna3POOZEg_opw"
            youtubeUrl={`https://www.youtube.com/watch?v=${video.id}`}
          />
        ))}
      </div>
    </motion.section>
  );
};
