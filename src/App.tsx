import './App.scss'
import Home from './pages/home/home';
import NotFound from './pages/404/NotFound'
import VideoDownloader from './pages/videodownloader/VideoDownloader'
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/videodownloader" element={<VideoDownloader />} />
      <Route path=""  element={<NotFound />} />
    </Routes>
  );
}

export default App
