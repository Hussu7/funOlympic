import React from "react";
import { Link } from "react-router-dom";
import { Typography, Card, CardContent, CardMedia } from "@mui/material";
import {
  CheckCircle,
  CompressOutlined,
  VideocamOutlined,
} from "@mui/icons-material";
import {
  demoThumbnailUrl,
  demoCideoUrl,
  DemoVideoTitle,
  demoChannelUrl,
  demoChannelTitle,
  demoVideoUrl,
} from "../utils/constants";

const VideoCard = ({
  video: {
    id: { videoId },
    snippet,
  },
}) => {
  return (
    <Card
      variant="outlined"
      sx={{
        width: { md: "250px", xs: "100%" },
        borderRadius: "none",
        boxshadow: "none",
      }}
    >
      <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
        <CardMedia
          image={snippet?.thumbnails?.high?.url}
          alt={snippet?.title}
          sx={{ width:'100%', height:180 }}
        />
      </Link>
      <CardContent sx={{height:'100px', backgroundColor:'#1e1e1e'}}>
        <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
          <Typography variant="subtitle1" fontWeight="bold" color="white">
            {snippet?.title.slice(0, 60)}
          </Typography>
        </Link>
        <Link
          to={
            snippet?.channelId
              ? `/channel/${snippet?.channelId}`
              : demoChannelUrl
          }
        >
          <Typography variant="subtitle2" color="gray">
            {snippet?.channelTitle}
            <CheckCircle sx={{ fontSize: 12, color: "gray", ml: "10px" }} />
          </Typography>
        </Link>
      </CardContent>
    </Card>
  );
};

export default VideoCard;
