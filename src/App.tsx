import './App.scss'
import Home from './pages/home/home';
import NotFound from './pages/404/NotFound'
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="*"  element={<NotFound />} />
    </Routes>
  );
}

export default App
