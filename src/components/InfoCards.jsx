import React from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";

import faceScan from "../assets/face.gif";
import faceGif from "../assets/facescan.gif";
import tutorialGif from "../assets/tutorial.gif";
import "../styles/InfoCards.css";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

const cards = [
  {
    gifSrc: faceScan,
    title: "Check Your Liveness",
    description: "Liveness Detection in action.",
    linkTo: "/api_live",
  },
  {
    gifSrc: tutorialGif,
    title: "Checkout the Tutorial",
    description: "Get started in simple steps.",
    linkTo: "/tutorial",
  },
  {
    gifSrc: faceGif,
    title: "Are you Registered?",
    description: "Face authentication in action.",
    linkTo: "/api_identify",
  },
  
];

const Card = ({ gifSrc, title, description, linkTo }) => {
  return (
    <div className="card">
      <div
        className="card-img"
        style={{
          backgroundImage: `url(${gifSrc})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>
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
  const settings = {
    className: "center",
    infinite: true,
    centerMode: true,
    slidesToShow: 3,
    centerPadding: "0px",
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 3000,
    // cssEase: "ease-in-out",
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          centerPadding: "0px",
        },
      },
    ],
  };
  

  return (
    <div className="carousel-wrapper">
      <Slider {...settings}>
        {cards.map((card, index) => (
          <Card key={index} {...card} />
        ))}
      </Slider>
    </div>
  );
};

export default InfoCards;
