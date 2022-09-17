import { Stack, Box, Typography } from "@mui/material";
import { useState, useEffect } from "react";
import { fetchFromAPI } from "../utils/fetchFromApi";
import { SideBar, Videos } from "./";

const Feed = () => {
  const [selectedCategory, setSelectedCategory] = useState("New");
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${selectedCategory}`).then((data) =>
      setVideos(data.items)
    );
  }, [selectedCategory]);

  return (
    <Stack
      sx={{
        flexDirection: { xs: "column", sm: "row" },
        height: "100%",
        overflowY: "hidden",
      }}
    >

      {/* sidebar */}
      <Box
        sx={{
          width: { xs: "100%", sm: "220px" },
          height: { xs: "auto", sm: "100%" },
        }}
      >
        <SideBar
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
          setVideos={setVideos}
        />
      </Box>
      
      {/* feed */}
      <Stack
        sx={{
          px: 2,
          flex: 1,
          overflowY: 'auto'
        }}
      >
        <Typography
          variant="h4"
          sx={{
            mt: {xs: 2, sm: 0}
          }}
        >
          <span
            style={{
              color: "red",
            }}
          >
            {selectedCategory} <span style={{ color: "#fff" }}> videos</span>
          </span>
        </Typography>
        <Videos videos={videos} />
      </Stack>
    </Stack>
  );
};

export default Feed;