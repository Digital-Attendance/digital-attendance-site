import "../styles/Tutorial.css";
import React, { useState } from "react";
import TutorialFaculty from "../components/TutorialFaculty";
import TutorialStudent from "../components/TutorialStudent";
import { Radio, RadioGroup, FormControlLabel, FormControl, FormLabel } from "@mui/material";

const Tutorial = () => {
  const [selectedTutorial, setSelectedTutorial] = useState("");

  return (
    <div className="tutorial">
      <h1>Learn How to Use</h1>
      <p className="tutorial-intro">
        Choose your user type below to view a step-by-step guide on using the Digital Attendance App.  
        Whether you're a faculty member managing attendance or a student marking your presence,
        we’ve got everything covered.
      </p>

      <FormControl component="fieldset" className="tutorial-selector">
        <FormLabel component="legend" sx={{ color: '#007d7d', fontWeight: 'bold' }}>Select User Type:</FormLabel>
        <RadioGroup
          row
          aria-label="tutorial"
          name="tutorial"
          value={selectedTutorial}
          onChange={(e) => setSelectedTutorial(e.target.value)}
          className="radio-group"
        >
          <FormControlLabel value="faculty" control={<Radio />} label="Faculty" />
          <FormControlLabel value="student" control={<Radio />} label="Student" />
        </RadioGroup>
      </FormControl>

      <div className="tutorial-content">
        {selectedTutorial === "faculty" && <TutorialFaculty />}
        {selectedTutorial === "student" && <TutorialStudent />}
      </div>
    </div>
  );
};

export default Tutorial;
