import { Card, Group, Image, Text, Badge, Container } from "@mantine/core";
import {
  IconPlayerPlay,
  IconMessage,
  IconBrandYoutubeFilled,
  IconThumbUpFilled,
  IconBrandSpotifyFilled,
} from "@tabler/icons-react";
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
  <Container style={{
    width: "100%",
    borderRadius: "12px",
    position: "relative",
    overflow: "visible",
    padding: 0,
  }}>
    <Card
      shadow="sm"
      style={{
        width: "100%",
        borderRadius: "12px",
        position: "relative",
        overflow: "visible",
      }}>
      { isRecent && (
        <Badge
          size="xl"
          variant="gradient"
          gradient={{ from: "#FF0033", to: "#FF0033" }}
          color="#FF0033"
          style={{ position: "absolute", top: "-0.5rem", left:  "-1rem", transform: 'rotate(-45deg)', zIndex: 3 }}>
          New
        </Badge>
        )}
      <a style={{ position: "relative" }}  target="_blank" href={youtubeUrl} rel="noreferrer">
        <Image src={thumbnail} alt="video" radius="md" style={{ marginBottom: "15px" }} />
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            background: "rgba(0, 0, 0, 0.5)",
            padding: "10px",
            borderRadius: "50%",
          }}>
          <IconPlayerPlay size={20} color="white" />
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
