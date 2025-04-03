import "../styles/Tutorial.css";
import React from "react";

import TutorialFaculty from "../components/TutorialFaculty";
import TutorialStudent from "../components/TutorialStudent";

const Tutorial = () => {
  return (
    <div className="tutorial">
      <h1>How to Use</h1>
      <div className="main">
        <div className="container">
          <h2>For Faculty</h2>
          <TutorialFaculty />
        </div>
        <div className="container">
          <h2>For Student</h2>
          <TutorialStudent />
        </div>
      </div>
    </div>
  );
};

export default Tutorial;
