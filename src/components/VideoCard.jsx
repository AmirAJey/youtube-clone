import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { demoVideoUrl, demoVideoTitle } from "../utils/constants";
import { CheckCircle } from "@mui/icons-material";

const VideoCard = ({ video: {id: {videoId}, snippet} }) => {
  return (
    <Card
      sx={{
        display: 'flex',
        flexDirection: 'column',
        width: "100%",
        height: "100%",
        borderRadius: 0
      }}
    >
      <Link
        to={`/video/${videoId}`}
        style={{
          width: "100%",
          height: '70%',
        }}
      >
        <CardMedia
          image={snippet?.thumbnails?.high?.url || demoVideoUrl}
          sx={{
            width: "100%",
            height: '100%',
            objectFit: 'cover'
          }}
        />
      </Link>
      <CardContent
        sx={{
          display: 'grid',
          placeItems: 'center top',
          width: "100%",
          height: '30%',
          backgroundColor: '#3d3d3d',
          color: '#fff'
        }}
      >

        {/* video title */}
        <Link to={`/video/${videoId}`}>
          <Typography
            variant="subtitle2"
            sx={{color: '#fff', whiteSpace: 'wrap'}}
          >
            {snippet?.title.substring(0, 60) || demoVideoTitle}
          </Typography>
        </Link>

        {/* channel title */}
        <Link to={`/channel/${snippet?.channelId}`}>
          <Typography
            className="channel-Link"
            variant="subtitle2"
            sx={{
              color: 'gray',
              fontWeight: 'bold'
            }}
          >
            {snippet?.channelTitle}
            <CheckCircle
              sx={{fontSize: '12px', ml: '3px'}}
            />
          </Typography>
        </Link>
      </CardContent>
    </Card>
  );
};

export default VideoCard;
