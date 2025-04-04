import React from "react";
import "../styles/Home.css";
import appScreenshot from "../assets/tutorials/tutorial_9.jpg";

const Home = () => {
  return (
    <div className="home-container">
      <section className="app-section">
        <div className="app-text">
          <h1>Digital Attendance</h1>
          <p>Revolutionizing attendance tracking with smart technology.</p>
          <p>
            Our system ensures secure, location-based, and foolproof attendance marking.
          </p>

          <a
            href="https://drive.usercontent.google.com/download?id=1wilvBgVDEBydzQl7TlKQnKMgo8Gsc6r2&export=download&authuser=0&confirm=t&uuid=36cc0d63-b529-4003-9550-72ac98fc649c&at=APcmpoybynpURX68Dty_MqH8D7hV%3A1743682182016"
            target="_blank"
            rel="noopener noreferrer"
            className="download-btn"
          >
            Download App
          </a>
        </div>

        <div className="phone-frame">
          <img src={appScreenshot} alt="App Screenshot" className="tutorial-image" />
        </div>
      </section>

      <section className="features">
        <h2>What Makes It Special?</h2>
        <div className="feature-items">
          <div className="feature-card">
            <h3>Location-Based</h3>
            <p>Only mark attendance within the classroom range.</p>
          </div>
          <div className="feature-card">
            <h3>Secure</h3>
            <p>Facial recognition and Liveness Detection ensure no proxy attendance.</p>
          </div>
          <div className="feature-card">
            <h3>Easy to Use</h3>
            <p>Simple UI for both students and faculty.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
