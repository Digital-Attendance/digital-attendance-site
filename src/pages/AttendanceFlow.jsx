import React from 'react';
import flow from '../assets/APPFLOW-3.png';
import '../styles/AttendanceFlow.css';
const AttendanceFlow = () => {
  return (
    <div className='flow-main-container'>
      <img 
        src={flow}
        alt="Description of the image" 
        className='flow-image'
      />
    </div>
  );
};

export default AttendanceFlow;
