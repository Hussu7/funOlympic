import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  Login,
  ChannelDetail,
  Feed,
  Navbar,
  SearchFeed,
  VideoDetail,
} from "./components";
import { Box } from "@mui/material";

const App = () => (
  <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/" exact element={<Feed />} />
      <Route path="/video/:id" element={<VideoDetail />} />
      <Route path="/channel/:id" element={<ChannelDetail />} />
      <Route path="/search/:searchTerm" element={<SearchFeed />} />
    </Routes>
  </BrowserRouter>
);

export default App;
