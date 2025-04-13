import React, { useState } from "react";
import "../styles/Banner.css";

const Banner = () => {
  const [search, setSearch] = useState("");

  return (
    <div className="banner-container">
      <div className="banner-header">
        <h1 className="banner-title">
          Digital <br /> Attendance
        </h1>
        <p className="banner-subtitle">
          Revolutionizing attendance tracking with smart technology. Ensures
          foolproof attendance marking.
        </p>
      </div>
      <div className="banner-search">
        <input
          className="search-input"
          value={search}
          onChange={(e) => setSearch(e.target.value.toLowerCase())}
          placeholder="Type Your Search Here"
          type="text"
        />
        <button className="search-button">Search</button>
      </div>
    </div>
  );
};

export default Banner;
