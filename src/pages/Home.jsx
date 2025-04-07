import React, { useEffect, useState } from "react";
import "../styles/Home.css";
import appScreenshot from "../assets/app.jpg";
import { FaDownload, FaUsers } from "react-icons/fa";

const Home = () => {
  const [downloadCount, setDownloadCount] = useState(0);
  const [activeUsers, setActiveUsers] = useState(0);

  useEffect(() => {
    fetch("https://welcomed-gelding-relaxed.ngrok-free.app/stats", {
      headers: {
        "ngrok-skip-browser-warning": "true",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setDownloadCount(data.downloads);
        setActiveUsers(data.activeUsers);
      })
      .catch((err) => console.error("Failed to fetch stats:", err));
  }, []);

  return (
    <div className="home-container">
      <section className="app-section">
        <div className="app-text">
          <div className="header">
            <h1>Digital Attendance</h1>
            <p>Revolutionizing attendance tracking with smart technology.</p>
            <p>Ensures foolproof attendance marking.</p>
          </div>
          <div className="stats">
            <div className="stat-num">
              <strong>{downloadCount}</strong>
              <div className="stat-item">
                <FaDownload />
                Downloads
              </div>
            </div>
            <div className="stat-num">
              <strong>{activeUsers}</strong>
              <p className="stat-item">
                <FaUsers />
                Active Users
              </p>
            </div>
          </div>
          <div className="download-cnt">
            {/* <p>Join the revolution in attendance tracking!</p>
            <p>Download the app today and experience the difference.</p> */}
            <a
              href="https://welcomed-gelding-relaxed.ngrok-free.app/download"
              target="_blank"
              rel="noopener noreferrer"
              className="download-btn"
            >
              Download App
            </a>
          </div>
        </div>

        <div className="phoneframe">
          <img src={appScreenshot} alt="App Screenshot" className="app-image" />
        </div>
      </section>

      <section className="features">
        <h2>What Makes It Special?</h2>
        <div className="feature-items">
          <div className={`feature-card feature-card-1`}>
            <h3>Location-Based</h3>
            <p>Only mark attendance within the classroom range.</p>
          </div>
          <div className={`feature-card feature-card-2`}>
            <h3>Secure</h3>
            <p>
              Facial recognition and Liveness Detection ensures no proxy
              attendance.
            </p>
          </div>
          <div className={`feature-card feature-card-3`}>
            <h3>Easy to Use</h3>
            <p>Simple UI for both students and faculty.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
