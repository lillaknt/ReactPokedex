import "./Components/style.css";
import React from "react";
import Main from "./Components/Main";
import { Routes, Route } from "react-router-dom";
import About from "./Components/About";
import Video from "./Components/Video";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/about" element={<About />} />
        <Route path="/vid" element={<Video />} />
      </Routes>
    </>
  );
}

export default App;
