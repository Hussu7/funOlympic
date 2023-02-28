import React from "react";
import { Stack, Box } from "@mui/material";
import { ChannelCard, VideoCard } from "./";

const Videos = ({ videos }) => {
  console.log("videos",videos)

  return (
    <Stack
      direction= "row"
      flexWrap="wrap"
      justifyContent="center" 
      alignItems="center"
      gap={1}
      pt={1}
      mt={1}
    >
      {videos.map((item, idx) => (
        <Box key={idx}>
          {item.id.videoId && <VideoCard video={item} />}
          {item.id.channelId && <ChannelCard channelDetail={item} />}
        </Box>
      ))}
    </Stack>
  );
};

export default Videos;
