import { Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import { Feed, SearchFeed, VideoDetail, ChannelDetail} from "./components"

const app = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Feed />} />

        <Route path="video/:id" element={<VideoDetail />} />
        <Route path="channel/:id" element={<ChannelDetail />} />
        <Route path="search/:searchTerm" element={<SearchFeed />} />

        <Route path="*" element={<h1>page not found!</h1>} />
      </Route>
    </Routes>
  );
};

export default app;
