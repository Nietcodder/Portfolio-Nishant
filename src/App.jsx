import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Certificate from "./components/Certificate";
import Experience from "./components/Experience";
import Navbar from "./components/Navbar";

import "./App.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar /> {/* ✅ Navbar is now the only navigation */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Certificate" element={<Certificate />} />
          <Route path="/Experience" element={<Experience />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
