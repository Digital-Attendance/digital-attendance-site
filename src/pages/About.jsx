import "../styles/About.css";
import React from "react";
import profilePic from "../assets/profile_bg.png";
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
          <p className="subtitle">Full Stack Developer & App Developer</p>
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
          A passionate software developer with expertise in full-stack
          development and mobile app development. Driven by problem-solving and
          innovation, I have developed this system to{" "}
          <strong>simplify attendance tracking </strong>
          using modern technologies. I am{" "}
          <span className="highlight">
            trustworthy, creative, and an effective communicator
          </span>
          . I fondly anticipate working in a challenging yet rewarding
          organization to attain its visions for personal growth.
        </p>
      </div>
    </div>
  );
};

export default About;
