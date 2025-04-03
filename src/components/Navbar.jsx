import "../styles/Navbar.css";
import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/icon.png"
const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo-container">
        <img src={logo} alt="Logo" className="logo" />
        <h1>Digital Attendance</h1>
      </div>
      <div>
        <Link to="/">Home</Link>
        <Link to="/tutorial">Tutorial</Link>
        <Link to="/about">About</Link>
      </div>
    </nav>
  );
};

export default Navbar;
