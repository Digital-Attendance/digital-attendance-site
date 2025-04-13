import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Tutorial from "./pages/Tutorial";
import API from "./pages/API";
import About from "./pages/About";
import GettingStarted from "./pages/GettingStarted";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import './App.css'
import AttendanceFlow from "./pages/AttendanceFlow";
const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="*" element={<Home />} />
        <Route path="/" element={<Home />} />
        <Route path="/tutorial" element={<Tutorial />} />
        <Route path="/apis" element={<API/>} />
        <Route path="/gettingstarted" element={<GettingStarted />} />
        <Route path="/about" element={<About />} />
        <Route path="/flow" element={<AttendanceFlow />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
