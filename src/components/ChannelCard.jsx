import { Stack, CardMedia, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { demoProfilePicture } from "../utils/constants";
import { CheckCircle } from "@mui/icons-material";
import { useRef, useEffect, useState } from "react";

const ChannelCard = ({ channelDetail }) => {
  const card = useRef()
  const [cardSize, setCardSize] = useState({width: 0, height: 0})

  const handleCardSize = () => {
    if (card.current){
      setCardSize({
        width: card.current.clientWidth,
        height: card.current.clientHeight
      })
    }
  }

  useEffect(() => {
    handleCardSize()
    window.addEventListener('resize', handleCardSize)
    return () => window.removeEventListener('resize', handleCardSize)
  }, [])

  const {snippet} = channelDetail

  return (
    <Link to={`/channel/${snippet?.channelId}`}>
      <Stack
        ref={card}
        spacing={1}
        sx={{
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          height: "100%",
          borderRadius: 0,
          backgroundColor: "transparent",
        }}
      >
        <CardMedia
          image={snippet.thumbnails.high.url || demoProfilePicture}
          sx={{
            width: `${cardSize.width / 2}px`,
            height: `${cardSize.width / 2}px`,
            border: '2px solid black',
            borderRadius: "50%",
          }}
        />
        <Typography
          variant="subtitle2"
          sx={{
            color: "gray",
          }}
        >
          {snippet?.title}
          <CheckCircle
            sx={{
              fontSize: "14px",
              ml: "5px",
            }}
          />
        </Typography>

        {/* channel subscribe count */}
        {channelDetail?.statistics?.subscriberCount && (
          <Typography
            variant="subtitle2"
            sx={{
              color: "gray",
            }}
          >
            {parseInt(channelDetail.statistics.subscriberCount).toLocaleString()} subscribers
          </Typography>
        )}
      </Stack>
    </Link>
  );
};

export default ChannelCard;
