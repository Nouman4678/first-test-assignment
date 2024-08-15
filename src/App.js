import React, { useState } from 'react';
import Header from '../src/Components/Header';
import PageRow from '../src/Components/PageRow';
import Button from '../src/Components/Button';
import './App.css';

const App = () => {
  // State to manage the list of pages and their checked status
  const [pages, setPages] = useState([
    { id: 1, name: 'Page 1', checked: false },
    { id: 2, name: 'Page 2', checked: false },
    { id: 3, name: 'Page 3', checked: false },
    { id: 4, name: 'Page 4', checked: false },
    { id: 5, name: 'Page 5', checked: false },
    { id: 6, name: 'Page 6', checked: false }
  ]);

  // State to manage whether all pages are checked or not
  const [allChecked, setAllChecked] = useState(false);

  // State to manage whether the button is clicked or not
  const [buttonClicked, setButtonClicked] = useState(false);

  // Function to handle checking or unchecking all pages
  const handleAllCheck = () => {
    const newChecked = !allChecked;
    setAllChecked(newChecked);
    setPages(pages.map(page => ({ ...page, checked: newChecked })));
  };

  // Function to handle checking or unchecking an individual page
  const handleCheck = (id) => {
    const updatedPages = pages.map(page =>
      page.id === id ? { ...page, checked: !page.checked } : page
    );
    setPages(updatedPages);
    setAllChecked(updatedPages.every(page => page.checked));
  };

  // Functions to handle the Mouse Events (like entering, leaving e.t.c)
  const handleButtonMouseDown = () => {
    setButtonClicked(true);
  };

  const handleButtonMouseUp = () => {
    setButtonClicked(false);
  };

  const handleMouseLeave = () => {
    setButtonClicked(false);
  };

  const handleMouseEnter = () => {
    if (buttonClicked) {
      setButtonClicked(true);
    }
  };

  return (
    <div className="container">
      <div className="box" onMouseLeave={handleMouseLeave} onMouseEnter={handleMouseEnter}>
        {/* Header component with "Select All" checkbox */}
        <Header allChecked={allChecked} onAllCheck={handleAllCheck} />
        <hr />
        <div className="content">
          {/* Rendering the list of pages with checkboxes */}
          {pages.map((page) => (
            <PageRow key={page.id} page={page} onCheck={handleCheck} />
          ))}
        </div>
        <hr className={buttonClicked ? 'dark' : ''} />
        <div className="btn-box">
          {/* Button component with mouse events */}
          <Button
            onMouseDown={handleButtonMouseDown}
            onMouseUp={handleButtonMouseUp}
          />
        </div>
      </div>
    </div>
  );
};

export default App;
