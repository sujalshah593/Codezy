import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import YouTubeNavbar from "../Youtube/mainhome"
import CategoryPage from "./videos"
import VideoDetail from "./VideoDetail"
import LikedVideos from "./Likedvideos"
import About from './About'
import Watchlater from "./Watchlater"

function Main() {
  return (
    <Router>
      <Routes>
        {/* Wrapper layout route */}
        <Route path="/" element={<YouTubeNavbar />}>
          <Route path="category/:category" element={<CategoryPage />} />
          <Route path="video/:id" element={<VideoDetail />} />
          <Route path="/likedvideos" element={<LikedVideos/>}/>
          <Route path="/watchedlater" element={<Watchlater/>}/>
          <Route path="/about" element={<About/>}/>
        </Route>
      </Routes>
    </Router>
  )
}

export default Main
