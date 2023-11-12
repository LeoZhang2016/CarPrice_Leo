/*
 * @Descripttion: 
 * @version: 
 * @Author: smile
 * @Date: 2023-11-11 14:43:45
 * @LastEditors: smile
 * @LastEditTime: 2023-11-12 21:00:18
 */
import React, { useState } from 'react';
import '../scss/components/select.scss'; // 在同一目录下创建一个CSS文件


const Select = ({ options , onChange }) => {
    const [isOpen, setIsOpen] = useState(false);
    // const [selectedItem, setSelectedItem] = useState(options.length > 0 ? options[0] : '');
    // first judge options is a array or not
    const [selectedItem, setSelectedItem] = useState(Array.isArray(options) ? options[0] : '');
  
    // const options = ['Option 1', 'Option 2', 'Option 3', 'Option 4', 'Option 5'];
  
    const handleToggle = () => {
      setIsOpen(!isOpen);
    };
  
    const handleItemClick = (item) => {
      setSelectedItem(item);
      setIsOpen(false);
    };
  
    // console.log("options[0] is : ",options[0] || 'null')

    return (      
      <div className="dropdown-container">
        <div className="dropdown-header" onClick={handleToggle}>
          <span>{selectedItem || 'Select an option'}</span>
          {/* <span>{ options[0]? options[0] : 'Select an option'}</span> */}
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
  
  export default Select;