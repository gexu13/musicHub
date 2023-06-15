import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import MusicApp from "./music-app";

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <Routes>
          <Route path="/music/*" element={<MusicApp />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;