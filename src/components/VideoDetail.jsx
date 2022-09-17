import { Stack, Box, Typography } from "@mui/material";
import { useState, useEffect, useRef } from "react";
import { Videos, Comments } from "./";
import ReactPlayer from "react-player";
import { Link, useParams } from "react-router-dom";
import { fetchFromAPI } from "../utils/fetchFromApi";

const VideoDetail = () => {
  const { id } = useParams();
  const [videoDetail, setVideoDetail] = useState(null);
  const [relatedVideos, setRelatedVideos] = useState(null);
  const [videoComments, setVideoComments] = useState(null);
  const [videoSize, setVideoSize] = useState(1);
  
  const leftBox = useRef();

  const handleVideoSize = () => {
    if (leftBox.current) {
      setVideoSize(leftBox.current.clientWidth);
    }
  };

  useEffect(() => {
    fetchFromAPI(`videos?part=snippet,statistics&id=${id}`).then((data) =>
      setVideoDetail(data.items[0])
    );

    fetchFromAPI(`search?part=snippet,id&type=video&relatedToVideoId=${id}`).then((data) =>
    setRelatedVideos(data.items)
    );

    fetchFromAPI(`commentThreads?part=snippet&videoId=${id}`).then((data) =>
    setVideoComments(data.items)
    );
  }, [id]);

  useEffect(() => {
    handleVideoSize();
    window.addEventListener("resize", handleVideoSize);
    return () => window.removeEventListener("resize", handleVideoSize);
  }, [leftBox.current]);

  if (!videoDetail) return null;

  return (
    <Box sx={{ height: "100%", px: { xs: 0, md: 12 }, overflowY: "auto" }}>
      <Stack
        direction={{ xs: "column", md: "row" }}
        spacing={5}
        sx={{
          width: "100%",
          height: "100%",
        }}
      >
        {/* left Side */}
        <Box
          ref={leftBox}
          sx={{
            width: "100%",
            minHeight: "100%",
            color: "white",
            overflowY: "auto",
          }}
        >
          {/* video player and video detail */}
          <Box sx={{ width: "100%", height: "85vh"}}>
            <ReactPlayer
              url={`https://www.youtube.com/watch?v=${id}`}
              width="100%"
              height={`${(videoSize * 9) / 16}px`}
              controls
            />
            <Box
              sx={{
                py: 1,
                px: 2,
              }}
            >
              <Stack
                direction="row"
                justifyContent="space-between"
                alignItems="center"
              >
                {/* video title */}
                <Typography variant="h6">
                  {videoDetail?.snippet?.title}
                </Typography>

                {/* views and likes */}
                <Stack direction="row" alignItems="center" spacing={2}>
                  <Typography variant="subtitle2">
                    {parseInt(
                      videoDetail?.statistics?.likeCount
                    ).toLocaleString()}
                    {' '}likes
                  </Typography>
                  <Typography variant="subtitle2">
                    {parseInt(
                      videoDetail?.statistics?.viewCount
                    ).toLocaleString()}
                    {' '}views
                  </Typography>
                </Stack>
              </Stack>
              <Link to={`/channel/${videoDetail?.snippet?.channelId}`}>
                <Typography
                  variant="subtitle2"
                  sx={{
                    color: "gray",
                    fontWeight: "bold",
                  }}
                >
                  {videoDetail?.snippet?.channelTitle}
                </Typography>
              </Link>
            </Box>
          </Box>

          {/* video comments */}
          <Typography>
            {parseInt(videoDetail?.statistics?.commentCount).toLocaleString()} comments
          </Typography>

          {
            videoComments && <Comments comments={videoComments} />
          }
        </Box>

        {/* right side */}
        <Box
          sx={{
            width: { xs: "100%", md: "40%" },
            color: "white",
            overflowY: 'auto'
          }}
        >
          {relatedVideos && <Videos videos={relatedVideos.slice(0,20)} direction="column" />}
        </Box>
      </Stack>
    </Box>
  );
};

export default VideoDetail;
