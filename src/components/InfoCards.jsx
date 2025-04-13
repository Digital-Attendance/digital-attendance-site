import React from "react";
import "../styles/InfoCards.css";

import { Link } from "react-router-dom";
import faceGif from "../assets/face.gif"
import tutorialGif from "../assets/tutorial.gif";



const Card = ({ gifSrc, title, description, linkTo }) => {
  return (
    <div className="card">
      <div className="card-img">
        <img src={gifSrc} alt="Card gif" />
      </div>
      <div className="card-info">
        <p className="text-title">{title}</p>
        <p className="text-body">{description}</p>
        <Link to={linkTo}>
          <button className="card-button">Go</button>
        </Link>
      </div>
    </div>
  );
};
const InfoCards = () => {
  return (
    <div className="cards-container">
      <Card
        gifSrc={faceGif}
        title="Check Your Liveness"
        description="Face authentication in action."
        linkTo="/apis"
      />
      <Card
        gifSrc={tutorialGif}
        title="Checkout the Tutorial"
        description="Get started in simple steps."
        linkTo="/tutorial"
      />
    </div>
  );
};

export default InfoCards;
