import "../styles/About.css";
import React from "react";
import profilePic from "../assets/profile.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const About = () => {
  return (
    <div className="about-container">
      <div className="about-card">
        <img src={profilePic} alt="Developer" className="profile-image" />

        <div className="about-content">
          <h1>About the Developer</h1>
          <p className="developer-name">Piyush Kumar</p>
          <p className="developer-bio">
            A passionate software developer with expertise in full-stack development and mobile app development. 
            Driven by problem-solving and innovation, Piyush developed this system to <strong>simplify attendance tracking </strong> 
            using modern technologies.
          </p>

          <div className="social-links">
            <a href="https://github.com/piyushdevan" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faGithub} className="icon" /> GitHub
            </a>
            <a href="https://in.linkedin.com/in/piyushdevan" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faLinkedin} className="icon" /> LinkedIn
            </a>
            <a href="mailto:piyushdevan@gmail.com">
              <FontAwesomeIcon icon={faEnvelope} className="icon" /> Email
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
