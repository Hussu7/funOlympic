import React, { useEffect } from "react";
import { useState } from "react";
import { Stack, Box, Typography } from "@mui/material";
import { Videos, SideBar } from "./";
import { fetchFromAPI } from "../utils/fetchFromAPI";

const Feed = () => {
  const [selectedCategory, setSelectedCategory] = useState("Home");
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${selectedCategory}`).then((data) =>
      setVideos(data.items)
    );
  }, [selectedCategory]);
  return (
    <Stack
    gap={15}
    sx={{flexDirection: { sx: "column", md: "row" }, position: "relative", pt:'90px'}}
    >
      <Box
        sx={{
          height: { sx: "auto", md: "92vh" },
          px: { sx: 0, md: 2 },
        }}
      >
        <SideBar
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
          className="sidebar"
        />
      </Box>
      <Box sx={{ p: 2,  }}>
        <Typography variant="h4" pt={1} sx={{ fontWeight: 600,textAlign:'center'}}>
          {selectedCategory}
          <span style={{ color: "#f31503", }}> Videos</span>
        </Typography>
        <Videos videos={videos} />
      </Box>
    </Stack>
  );
};

export default Feed;
