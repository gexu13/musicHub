import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import Home from "./music-app/home-screen";
import Bookmark from "./music-app/bookmark-screen";

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/bookmark" element={<Bookmark />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;