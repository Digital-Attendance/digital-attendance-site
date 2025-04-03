import React, { useState } from "react";
import "../styles/Tutorial.css";
import phoneFrame from "../assets/phone_frame.png";

import tutorial9 from "../assets/tutorials/tutorial_9.jpg";
import tutorial12 from "../assets/tutorials/tutorial_12.jpg";
import tutorial4 from "../assets/tutorials/tutorial_4.jpg";
import tutorial5 from "../assets/tutorials/tutorial_5.jpg";
import tutorial13 from "../assets/tutorials/tutorial_13.jpg";
import tutorial14 from "../assets/tutorials/tutorial_14.jpg";
 
const tutorialData = [
  {
    image: tutorial9,
    title: "Subject Information",
    description:
      "The centered Card displays the Subject Information. Press the subject name to navigate into the subject. Swipe the below Mark Attendance Button to start the Attendance procedure. Tap the Date to open the Side Menu.",
  },
  {
    image: tutorial12,
    title: "Side Menu",
    description: "Explore the options available in the Side Menu.",
  },
  {
    image: tutorial4,
    title: "Attendance Record",
    description: "The Attendance Record tracks your attendance.",
  },
  {
    image: tutorial5,
    title: "Attendance Procedure",
    description:
      "When your location is verified, you proceed to the next step. If you are outside the designated location, you cannot proceed further.",
  },
  {
    image: tutorial13,
    title: "Attendance Procedure",
    description: "Press the Mark Button to mark the Attendance.",
  },
  {
    image: tutorial14,
    title: "Attendance Procedure",
    description:
      "After Successful Liveness Detection and Facial Recognition, you are marked present. If any issue occurs in-between, press the Mark Button again to restart the procedure.",
  },
];

const TutorialStudent = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    if (currentIndex < tutorialData.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <div className="tutorial-container">
      <div className="phone-frame">
        <img
          src={tutorialData[currentIndex].image}
          alt="Tutorial Step"
          className="tutorial-image"
        />
        {/* <img src={phoneFrame} alt="Phone Frame" className="frame-overlay" /> */}
      </div>

      <h2 className="tutorial-title">{tutorialData[currentIndex].title}</h2>
      <p className="tutorial-description">
        {tutorialData[currentIndex].description}
      </p>

      <div className="button-container">
        {currentIndex > 0 && (
          <button className="button prev-button" onClick={handlePrevious}>
            Previous
          </button>
        )}
        <button className="button next-button" onClick={handleNext}>
          {currentIndex === tutorialData.length - 1 ? "Finish" : "Next"}
        </button>
      </div>
    </div>
  );
};

export default TutorialStudent;
