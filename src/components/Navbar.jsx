import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";
import logo from "../assets/icon.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      {/* Logo and App Name (Always Centered in Small Screens) */}
      <div className="logo-container">
        <img src={logo} alt="Logo" className="logo" />
        <h1>Digital Attendance</h1>
      </div>

      {/* Menu Button (Visible in Small Screens) */}
      <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
        ☰
      </div>

      {/* Navigation Links */}
      <div className={`nav-links ${menuOpen ? "open" : ""}`}>
        <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
        <Link to="/tutorial" onClick={() => setMenuOpen(false)}>Tutorial</Link>
        <Link to="/apis" onClick={() => setMenuOpen(false)}>APIs</Link>
        <Link to="/about" onClick={() => setMenuOpen(false)}>About</Link>
      </div>
    </nav>
  );
};

export default Navbar;
