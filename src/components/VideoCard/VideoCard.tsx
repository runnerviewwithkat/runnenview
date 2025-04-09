import { Card, Group, Image, Text, Badge, Container } from "@mantine/core";
import {
  IconPlayerPlay,
  IconMessage,
  IconBrandYoutubeFilled,
  IconThumbUpFilled,
  IconBrandSpotifyFilled,
} from "@tabler/icons-react";
import styles from './video.module.scss';
import React from "react";

interface YouTubeVideoCardProps {
  thumbnail: string;
  likeCount: string;
  viewCount: string;
  commentCount: string;
  title: string;
  youtubeUrl: string;
  spotifyUrl: string;
  date: string;
  isRecent: boolean;
}

//TODO: рефакторинг

export const VideoCard = ({ commentCount, likeCount, thumbnail, viewCount, youtubeUrl, date, isRecent, spotifyUrl }: YouTubeVideoCardProps) => (
  <Container className={styles.container}>
    <Card shadow="sm" className={styles.card}>
      { isRecent && (
        <Badge
          size="xl"
          variant="gradient"
          gradient={{ from: "#FF0033", to: "#FF0033" }}
          color="#FF0033"
          className={styles.badge}
        >
          New
        </Badge>
        )}
      <a className={styles.link}  target="_blank" href={youtubeUrl} rel="noreferrer">
        <Image src={thumbnail} alt="video" radius="md" className={styles.img} />
        <div className={styles.playIcon}>
          <IconPlayerPlay color="white"/>
        </div>
      </a>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", height: "1rem" }}>
        <Text size="xs" color="hsl(244, 16%, 43%)" >
          {date}
        </Text>
        <Group>
          <a target="_blank" href={spotifyUrl} rel="noreferrer">
            <IconBrandSpotifyFilled size={18} color="#1ED760" />
          </a>
          <a target="_blank" href={youtubeUrl} rel="noreferrer">
            <IconBrandYoutubeFilled size={18} color="#FF0033" />
          </a>
        </Group>
      </div>
    </Card>
    <div style={{
      background: "hsl(258, 60%, 98%)",
      gap: "0.5rem",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: '0.5rem'
    }}>
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: '0.2rem' }}>
        <Text size="xs" color="hsl(240, 17%, 73%)">{viewCount || 0} views</Text>
      </div>
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: '0.2rem' }}>
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: '0.2rem' }}>
          <IconThumbUpFilled size={15} color="hsl(240, 17%, 73%)" />
          <Text size="xs" color="hsl(240, 17%, 73%)"> {likeCount || 0}</Text>
        </div>
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: '0.2rem' }}>
          <IconMessage size={15} color="hsl(240, 17%, 73%)" />
          <Text size="xs" color="hsl(240, 17%, 73%)"> {commentCount || 0}</Text>
        </div>
      </div>
    </div>
  </Container>
);
