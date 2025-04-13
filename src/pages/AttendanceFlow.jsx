import React from 'react';
import flow from '../assets/APPFLOW-2.png';
import '../styles/AttendanceFlow.css';
const AttendanceFlow = () => {
  return (
    <div className='flow-main-container'>
      <h1 className='flow-header'>Attendance Flow</h1>
      <img 
        src={flow}
        alt="Description of the image" 
        className='flow-image'
      />
    </div>
  );
};

export default AttendanceFlow;