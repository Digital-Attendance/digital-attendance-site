import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Tutorial from "./pages/Tutorial";
import About from "./pages/About";
import API from "./pages/API";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import './App.css'
const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tutorial" element={<Tutorial />} />
        <Route path="/" element={<About />} />
        <Route path="/apis" element={<API/>} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
