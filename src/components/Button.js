/*
 * @Descripttion: 
 * @version: 
 * @Author: smile
 * @Date: 2023-11-11 14:44:46
 * @LastEditors: smile
 * @LastEditTime: 2023-11-11 14:57:15
 */
import React, { useState } from 'react';

const Dropdown = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedItem, setSelectedItem] = useState(null);
  
    const options = ['Option 1', 'Option 2', 'Option 3', 'Option 4', 'Option 5'];
  
    const handleToggle = () => {
      setIsOpen(!isOpen);
    };
  
    const handleItemClick = (item) => {
      setSelectedItem(item);
      setIsOpen(false);
    };
  
    return (
      <div className="dropdown-container">
        <div className="dropdown-header" onClick={handleToggle}>
          <span>{selectedItem || 'Select an option'}</span>
          <span className={`arrow ${isOpen ? 'up' : 'down'}`}></span>
        </div>
        {isOpen && (
          <div className="dropdown-content">
            <ul>
              {options.map((option) => (
                <li
                  key={option}
                  onClick={() => handleItemClick(option)}
                  className={selectedItem === option ? 'selected' : ''}
                >
                  {option}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    );
  };
  
  export default Dropdown;