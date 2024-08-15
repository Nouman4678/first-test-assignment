import React from 'react';
import '../App.css'; 

const CustomCheckbox = ({ checked }) => {
  return (
    // Rendering a div with a conditional class based on the "checked" prop
    <div className={`custom-checkbox ${checked ? 'checked' : ''}`} />
  );
};

export default CustomCheckbox;
