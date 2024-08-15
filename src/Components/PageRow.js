import React from 'react';
import CustomCheckbox from './CustomCheckbox';

const PageRow = ({ page, onCheck }) => {
  return (
    // Rendering a div representing a row, with a click event to toggle the checkbox
    <div className="page-row" onClick={() => onCheck(page.id)}>
      <p>{page.name}</p> 
      <CustomCheckbox checked={page.checked} /> 
    </div>
  );
};

export default PageRow;
