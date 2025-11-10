import { motion } from "framer-motion";
import React, { FC, useState } from "react";
import { Button, Group, Pagination, Stack } from "@mantine/core";

import { IEpisodesProps } from "./episodes.props";
import { PageTitle } from "../../components";
import { VideoCard } from "../../components/VideoCard/VideoCard";
import { getFormatDate, getIsDateWithinLast3Days } from "../../helpers";
import { useChannelVideosWithoutShorts } from "./query";
import EpisodesSkeleton from "../../components/EpisodesSkeleton/EpisodesSkeleton";

import styles from "./episodes.module.scss";

export const Episodes: FC<IEpisodesProps> = () => {
  const [pageToken, setPageToken] = useState<string | undefined>(undefined);
  const { data, isLoading, isFetching } = useChannelVideosWithoutShorts(50, pageToken);
  const [searchValue, setSearchValue] = useState("");

  const filteredItems = data?.videos?.filter((item) =>
    item.title.toLowerCase().includes(searchValue.toLowerCase())
  );

  return (
    <motion.section initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <PageTitle withSearch value={searchValue} setValue={setSearchValue}>
        Episodes
      </PageTitle>

      <div className={styles.product_grid}>
        {isLoading || isFetching ? (
          <>
            {Array.from({ length: 8 }).map((_, idx) => (
              <EpisodesSkeleton key={idx} />
            ))}
          </>
        ) : (
          filteredItems?.map((video) => (
            <VideoCard
              key={video.id}
              likeCount={video.likeCount || ''}
              commentCount={video.commentCount || '0'}
              viewCount={video.viewCount}
              isRecent={getIsDateWithinLast3Days(video.publishedAt)}
              date={getFormatDate(video.publishedAt)}
              title={video.title}
              thumbnail={video.thumbnail}
              spotifyUrl="https://open.spotify.com/show/6TRR1IVOe4VpjaDZH2M9LD?si=XK3cNdXMQna3POOZEg_opw"
              youtubeUrl={`https://www.youtube.com/watch?v=${video.id}`}
            />
          ))
        )}
      </div>

      {/* === Пагинация === */}
      <Stack align="center" mt="lg" mb="xl">
        <Group>
          <Button
            variant="light"
            disabled={!data?.prevPageToken}
            onClick={() => setPageToken(data?.prevPageToken)}
          >
            Previous
          </Button>

          <Button
            variant="light"
            disabled={!data?.nextPageToken}
            onClick={() => setPageToken(data?.nextPageToken)}
          >
            Next
          </Button>
        </Group>

        {/* Альтернатива с Pagination из Mantine */}
        {/* <Pagination total={X} page={currentPage} onChange={setCurrentPage} /> */}
      </Stack>
    </motion.section>
  );
};
