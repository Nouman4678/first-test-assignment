import React from 'react';
import CustomCheckbox from './CustomCheckbox';

const Header = ({ allChecked, onAllCheck }) => {
  return (
    // Rendering a header div with a click event to toggle the "Select All" checkbox
    <div className="header" onClick={onAllCheck}>
      <p>All pages</p> 
      <CustomCheckbox checked={allChecked} /> 
    </div>
  );
};

export default Header;

