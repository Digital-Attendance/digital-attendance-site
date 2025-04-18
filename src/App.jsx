import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Tutorial from "./pages/Tutorial";
import API_LIVENESS from "./pages/API_LIVENESS";
import API_IDENTIFY from "./pages/API_IDENTIFY";
import About from "./pages/About";
import GettingStarted from "./pages/GettingStarted";
import AttendanceFlow from "./pages/AttendanceFlow";
import ToolsTechs from "./pages/ToolsTechs";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./App.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "react-responsive-3d-carousel/dist/styles.css";
const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="*" element={<Home />} />
        <Route path="/" element={<Home />} />
        <Route path="/tutorial" element={<Tutorial />} />
        <Route path="/api_live" element={<API_LIVENESS />} />
        <Route path="/api_identify" element={<API_IDENTIFY />} />
        <Route path="/docs" element={<GettingStarted />} />
        <Route path="/about" element={<About />} />
        <Route path="/flow" element={<AttendanceFlow />} />
        <Route path="/tools" element={<ToolsTechs />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
