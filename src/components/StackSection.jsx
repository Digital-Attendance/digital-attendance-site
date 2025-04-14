import React from "react";
import { Link } from "react-router-dom";
import "../styles/StackSection.css";
import profile from "../assets/account-pic.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
  faTelegram,
} from "@fortawesome/free-brands-svg-icons";
import flow from "../assets/flowAnimation.gif";
import techs from "../assets/techs.gif";

const StackSection = () => {
  return (
    <div className="stack-section">
      <div className={`main-section developers`}>
        <div className={`content developers-content`}>
          <h2 className={`typo developers-typo`}>Meet The Developers</h2>
        </div>
        <div className="profiles">
          <figure className="fig">
            <div className="profile-image">
              <img src={profile} alt="profile-1" />
            </div>
            <figcaption>
              <h3>Developer 1</h3>
              <h5>Developer</h5>
              {/* <p>
                Which is worse, that everyone has his price, or that the price
                is always so low.
              </p> */}
              <div className="icons">
                <a
                  href="https://in.linkedin.com/in"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faLinkedin} />
                </a>
                <a href="mailto:21_ug@ei.nits.ac.in">
                  <FontAwesomeIcon icon={faEnvelope} />
                </a>
              </div>
            </figcaption>
          </figure>
          <figure className="fig">
            <div className="profile-image">
              <img src={profile} alt="profile-sample7" />
            </div>
            <figcaption>
              <h3>Developer 2</h3>
              <h5>Developer</h5>
              {/* <p>
                I'm killing time while I wait for life to shower me with meaning
                and happiness.
              </p> */}
              <div className="icons">
                <a
                  href="https://in.linkedin.com/in"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faLinkedin} />
                </a>
                <a href="mailto:21_ug@cse.nits.ac.in">
                  <FontAwesomeIcon icon={faEnvelope} />
                </a>
              </div>
            </figcaption>
          </figure>
        </div>

      </div>
      <div className={`main-section info info-1`}>
        <div className={`content info-1-content`}>
          <h2 className={`typo info-1-typo`}>Attendance Flow</h2>
          <Link to="/flow">
            <button className={`stacksection-button info-1-button`}>Learn More</button>
          </Link>
        </div>
        <div className="animation">
          <img src={flow} alt="flow" className="flow-animation" />
        </div>
      </div>
      <div className={`main-section info info-2`}>
        <div className={`content info-2-content`}>
          <h2 className={`typo info-2-typo`}>Tools & Techs</h2>
          <Link to="/tools">
            <button className={`stacksection-button info-2-button`}>Learn More</button>
          </Link>
        </div>
        <div className="animation">
          <img src={techs} alt="flow" className="techs-animation" />
        </div>
      </div>
    </div>
  );
};

export default StackSection;
