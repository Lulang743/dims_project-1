import React, { useState } from 'react';
import './NDSODashboard.css'; // Import CSS file for styling

import logo from './supp.png'; // Import your logo image
import OrderManagement from './OrderManagement';
import DrugStock from './DrugStock';
import InventoryManagement from './InventoryManagement';

const NDSODashboard = () => {
  const [displayedComponent, setDisplayedComponent] = useState(null);

  const handleButtonClick = (component) => {
    setDisplayedComponent(component);
  };

  return (
    <div className="ndso-dashboard">
      <div className="sidebar">
        <div className="logo-container">
          <img src={logo} alt="NDSO Logo" className="logo" />
          <button onClick={() => handleButtonClick(<OrderManagement />)} style={{ backgroundColor: '#606464' }}>
              Order Management
            </button>
            <button onClick={() => handleButtonClick(<InventoryManagement />)} style={{ backgroundColor: '#606464' }}>
              Inventory Management
            </button>
            <button onClick={() => handleButtonClick(<DrugStock />)} style={{ backgroundColor: '#606464' }}>
              Drug Stock
            </button>
          <div className="button-container">
            
          </div>
        </div>
      </div>
      <div className="screen">
        <div className="screen-content">
          {displayedComponent}
        </div>
      </div>
    </div>
  );
};

export default NDSODashboard;
