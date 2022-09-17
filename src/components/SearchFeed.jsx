import { Box, Typography } from "@mui/material";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchFromAPI } from "../utils/fetchFromApi";
import { Videos } from "./";

const SearchFeed = () => {
  const { searchTerm } = useParams();
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetchFromAPI(`search?part=snippet,id&q=${searchTerm}`).then((data) =>
      setVideos(data.items)
    );
  }, [searchTerm]);

  return (
    <Box
      sx={{
        height: '100%',
        overflowY: 'auto',
      }}
    >
      <Typography
        variant="h4"
        sx={{
          mt: { xs: 2, sm: 0 },
        }}
      >
        <span
          style={{
            color: "red",
          }}
        >
        <span style={{ color: "#fff" }}>searched for </span>
        {searchTerm}
        <span style={{ color: "#fff" }}> videos</span>
        </span>
      </Typography>
      <Videos videos={videos} />
    </Box>
  );
};

export default SearchFeed;
