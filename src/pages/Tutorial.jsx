import "../styles/Tutorial.css";
import React, { useState } from "react";
import TutorialFaculty from "../components/TutorialFaculty";
import TutorialStudent from "../components/TutorialStudent";

const Tutorial = () => {
  const [selectedTutorial, setSelectedTutorial] = useState("faculty");

  return (
    <div className="tutorial">
      <h1>How to Use</h1>

      {/* Dropdown to Select Tutorial Type */}
      <div className="tutorial-selector">
        <label htmlFor="tutorialType">Select User Type:</label>
        <select
          id="tutorialType"
          value={selectedTutorial}
          onChange={(e) => setSelectedTutorial(e.target.value)}
        >
          <option value="faculty">Faculty</option>
          <option value="student">Student</option>
        </select>
      </div>

      <div className="tutorial-content">
        {selectedTutorial === "faculty" ? <TutorialFaculty /> : <TutorialStudent />}
      </div>
    </div>
  );
};

export default Tutorial;
