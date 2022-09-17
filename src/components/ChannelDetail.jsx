import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { Box } from "@mui/material";
import { ChannelCard, Videos } from "./";
import { fetchFromAPI } from "../utils/fetchFromApi";

const ChannelDetail = () => {
  const { id } = useParams();

  const [channelDetail, setChannelDetail] = useState(null);
  const [channelVideos, setChannelVideos] = useState([]);

  console.log(channelDetail);

  useEffect(() => {
    fetchFromAPI(`channels?part=snippet&id=${id}`).then((data) =>
      setChannelDetail(data.items[0])
    );

    fetchFromAPI(`search?part=snippet&channelId=${id}&order=date`).then((data) =>
      setChannelVideos(data.items)
    );
  }, [id]);

  if (!channelDetail) {
    return null;
  }

  return (
    <Box
      sx={{
        height: "100%",
        overflowY: "auto",
      }}
    >
      {/* channel banner */}
      <Box
        sx={{
          width: "100%",
          height: "50%",
          background: `url(${channelDetail?.brandingSettings?.image?.bannerExternalUrl})` || "linear-gradient(90deg, rgba(214,90,182,1) 19%, rgba(75,204,187,1) 100%)",
          backgroundRepeat: "no-repeat",
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      />

      {/* channel card */}
      <Box
        sx={{
          width: "220px",
          height: "220px",
          boxSizing: "border-box",
          padding: 1,
          mx: 'auto',
          mt: '-70px'
        }}
      >
        <ChannelCard channelDetail={channelDetail} />
      </Box>

      {/* channel videos */}
      <Box sx={{px: 2}}>
        <Videos videos={channelVideos}/>
      </Box>
    </Box>
  );
};

export default ChannelDetail;
