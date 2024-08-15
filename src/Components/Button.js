import React from 'react';

const Button = ({ onMouseDown, onMouseUp }) => {
  return (
    // Rendering a button element with event handlers for mouse down and mouse up events
    <button
      className="done-button" 
      onMouseDown={onMouseDown} 
      onMouseUp={onMouseUp}     
    >
      Done 
    </button>
  );
};

export default Button;
