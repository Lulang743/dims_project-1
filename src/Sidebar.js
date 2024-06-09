import React, { useState } from 'react';
import './pharmacyDashboard.css';
import logo from './assets/icons8-doctor-48.png'; // Import the logo image
import Home from './Home';
import View from './View';
import Checkout from './Checkout';
import Update from './Update';

const Sidebar = () => {
  const [selectedOption, setSelectedOption] = useState('dashboard');

  const handleSelect = (section) => {
    setSelectedOption(section);
  };

  return (
    <div className="sidebar">
      <h2>Pharmacist</h2>
      <img src={logo} alt="Pharmacist Logo" className="logo" />
      <ul>
        <li onClick={() => handleSelect('dashboard')}>
          <i className="fas fa-tachometer-alt"></i> Dashboard
        </li>
        <li onClick={() => handleSelect('Add drug')}>
          <i className="fas fa-plus-circle"></i> Add drug
        </li>
        <li onClick={() => handleSelect('View stock')}>
          <i className="fas fa-plus-circle"></i> View drug stock
        </li>
        <li onClick={() => handleSelect('Order')}>
          <i className="fas fa-box"></i> Order
        </li>
      </ul>
      <div className="dashboard-content">
        {selectedOption === 'dashboard' && <Home />}
        {selectedOption === 'Add drug' && <View />}
        {selectedOption === 'View stock' && <Checkout />}
        {selectedOption === 'order' && <Update />}
      </div>
    </div>
  );
};

export default Sidebar;
