import { Skeleton, Stack } from "@mui/material";

const VideoSkeleton = ({ bgColor, animation }) => {
  return (
    <>
      <Stack
        spacing={1}
        sx={{
          width: "100%",
          height: "100%",
        }}
      >
        <Skeleton
          variant="rectangular"
          animation={animation}
          sx={{
            bgColor: "red",
            width: "100%",
            height: "70%",
            backgroundColor: bgColor,
          }}
        />
        <Skeleton
          variant="text"
          animation={animation}
          sx={{
            fontSize: "1rem",
            backgroundColor: bgColor,
          }}
        />
        <Skeleton
          variant="text"
          animation={animation}
          sx={{
            fontSize: "1rem",
            backgroundColor: bgColor,
          }}
        />
      </Stack>
    </>
  );
};

export default VideoSkeleton;
