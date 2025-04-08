import "../styles/About.css";
import React from "react";
import profilePic from "../assets/profilephoto_bg.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";

const About = () => {
  return (
    <div className="about-section">
      <div className="top-section">
        <div className="left">
          <p className="intro-text">
            I'M <span className="highlight-name">Piyush Kumar</span>
          </p>
          <p className="subtitle">Developer</p>
          <button className="contact-btn">Contact Me</button>
        </div>

        <div className="right">
          <img src={profilePic} alt="Developer" className="dev-image" />
          <div className="social-cnt">
            <div className="line"></div>
            <div className="socials">
              <a
                href="https://github.com/piyushdevan"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faGithub} />
              </a>
              <a
                href="https://in.linkedin.com/in/piyushdevan"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
              <a href="mailto:piyushdevan@gmail.com">
                <FontAwesomeIcon icon={faEnvelope} />
              </a>
              <a
                href="https://wa.me/6200103558"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faWhatsapp} />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="bottom-about">
        <h2>About</h2>
        <p>
          A passionate software developer with a strong foundation in full-stack
          and mobile app development, specializing in IoT and machine learning.
          I developed this system to{" "}
          <span className="highlight">simplify attendance tracking</span>{" "}
          through geotagging and facial recognition. Known for being{" "}
          <span className="highlight">
            trustworthy, creative, and an effective communicator
          </span>
          , I aim to contribute meaningfully to innovative and impact-driven
          organizations.
        </p>
      </div>
    </div>
  );
};

export default About;
