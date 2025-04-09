import { Group, Skeleton, Stack } from "@mantine/core";
import React from "react";

const EpisodesSkeleton = () => (
    <div>
      <Skeleton height={120} radius="md" >
      </Skeleton>
      <Stack spacing="xs" mt="xs">
        <Skeleton height={16} width="80%" />
      </Stack>
      <Group display="flex" mt="xs" style={{justifyContent: 'space-between'}}>
        <Skeleton height={12} width={100} radius="xl" />
        <Group>
          <Skeleton height={15} circle />
          <Skeleton height={15} circle />
        </Group>
      </Group>
    </div>
  );

export default EpisodesSkeleton;
