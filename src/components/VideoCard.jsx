import React from "react";
import { Link } from "react-router-dom";

import { Typography, Card, CardMedia, CardContent } from "@mui/material";
import { CheckCircle } from "@mui/icons-material";

import {
  demoThumbnailUrl,
  demoVideoUrl,
  demoVideoTitle,
  demoChannelUrl,
  demoChannelTitle,
} from "../utils/constants";
const VideoCard = ({
  video: {
    id: { videoId },
    snippet,
  },
}) => {
  return (
    <Card sx={{width: {sx: '100%', md: '320px'}, boxShadow: 'none', borderRadius: 0}} >
      <Link to={videoId ? `video/${videoId}` : demoThumbnailUrl}>
        <CardMedia
          image={snippet?.thumbnails?.high?.url}
          alt={snippet?.title}
          sx={{ width: 358, height: 180 }}
        />
      </Link>
      <CardContent sx={{ background: "#1e1e1e", height: 106 }}>
        <Link to={videoId ? `video/${videoId}` : demoThumbnailUrl}>
          <Typography variant="subtitle1" fontWeight="bold" color="#fff">
            {snippet?.title.slice(0, 60) || demoVideoTitle.slice(0, 60)}
          </Typography>
        </Link>
        <Link to={snippet.channelId ? `channel/${snippet.channelId}` : demoChannelUrl}>
          <Typography variant="subtitle2" fontWeight="bold" color="grey">
            {snippet?.channelTitle || demoChannelTitle}
        <CheckCircle sx={{fontSize: 12, color: 'grey', ml: '5px'}} />
          </Typography>
        </Link>
      </CardContent>
    </Card>
  );
};

export default VideoCard;
