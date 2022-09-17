import { Box, Stack } from "@mui/material";
import {VideoCard, ChannelCard} from "./"
import VideoSkeleton from "./VideoSkeleton";
const Videos = ({ videos, direction = 'row' }) => {

  if (!videos.length) {
    return (
      <Stack
      direction={direction}
      flexWrap="wrap"
      justifyContent="start"
    >
      {
        Array(8).fill({}).map((item, idx) => (
          <Box
            key={idx}
            sx={{
              width: direction === 'row' ? {xs: '100%', sm: '50%', md: `${100 / 3}%`, lg: '25%'} : '100%',
              height: '250px',
              boxSizing: 'border-box',
              padding: 1
            }}
          >
            <VideoSkeleton bgColor="grey.900" animation="pulse"/>
          </Box>
        ))
      }
    </Stack>
    )
  }

  return (
    <Stack
      direction={direction}
      flexWrap="wrap"
      justifyContent="start"
    >
      {
        videos.map((item, idx) => (
          <Box
            key={idx}
            sx={{
              width: direction === 'row' ? {xs: '100%', sm: '50%', md: `${100 / 3}%`, lg: '25%'} : '100%',
              height: '250px',
              boxSizing: 'border-box',
              padding: 1
            }}
          >
            {item.id.videoId && <VideoCard video={item} />}
            {item.id.channelId && <ChannelCard channelDetail={item}/>}
          </Box>
        ))
      }
    </Stack>
  )
}

export default Videos