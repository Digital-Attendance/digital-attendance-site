import React, { useState } from "react";
import "../styles/Tutorial.css";
import phoneFrame from "../assets/phone_frame.png";

import tutorial1 from "../assets/tutorials/tutorial_8.jpg";
import tutorial2 from "../assets/tutorials/tutorial_11.jpg";
import tutorial3 from "../assets/tutorials/tutorial_2.jpg";
import tutorial4 from "../assets/tutorials/tutorial_6.jpg";
import tutorial5 from "../assets/tutorials/tutorial_7.jpg";
import tutorial6 from "../assets/tutorials/tutorial_1.jpg";
import tutorial7 from "../assets/tutorials/tutorial_3.jpg";


const tutorialData = [
  {
    image: tutorial1,
    title: "Home Screen",
    description:
      "Tap the add subject button to add a new subject. Tap the Date to open the Side Menu",
  },
  {
    image: tutorial2,
    title: "Side Menu",
    description: "Explore the options available in the Side Menu.",
  },
  {
    image: tutorial3,
    title: "Subject Information",
    description:
      "The centered Card displays the Subject Information. Press the subject name to navigate into the subject. Swipe the below Attendance Button the start the Attendance.",
  },
  {
    image: tutorial4,
    title: "Attendance Button",
    description: "Swipe Back to Stop the Attendance.",
  },
  {
    image: tutorial5,
    title: "Leaderboard",
    description:
      "View the Leaderboard of the Subject. Press on any date to view the Attendance of that date. Press the Add Faculty Button to add a new Faculty.",
  },
  {
    image: tutorial6,
    title: "Attendance Record",
    description:
      "Press on Delete Icon to delete the Attendance Record. Press on Edit Icon to edit the Attendance Record. Press on Archive Icon to Archive the Subject.",
  },
  {
    image: tutorial7,
    title: "Edit Attendance",
    description:
      "Edit the Attendance Record and Press Save to Save the Changes. Press Cancel to Discard the Changes. Swipe the Email Button to Email the Attendance Record.",
  },
];

const TutorialFaculty = () => {
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
      <p className="tutorial-description">{tutorialData[currentIndex].description}</p>

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

export default TutorialFaculty;
