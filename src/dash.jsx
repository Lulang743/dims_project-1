import React, { useState } from 'react';
import logo from './doc.png'; 
import DrugOrder from './DrugOrder'; 
import './PharmacyDashboard.css'; 
import AddDrugs from './AddDrugs';
import ViewDrugs from './ViewDrugs';
import DrugInventory from './DrugInventory';

const PharmacyDashboard = () => {
  const [displayComponent, setDisplayComponent] = useState(null);

  const handleButtonClick = (component) => {
    setDisplayComponent(component);
  };

  return (
    <div className="pharmacy-dashboard">
      <div className="sidebar">
        <div className="logo-container">
          <img src={logo} alt="Pharmacy Logo" className="logo" />

          <button onClick={() => handleButtonClick(<DrugOrder />)} style={{ backgroundColor: '#002b3c' }}>
            Order Drugs
          </button>

          <button onClick={() => handleButtonClick(<AddDrugs />)} style={{ backgroundColor: '#002b3c' }}>
            Add Drugs
          </button>
          <button onClick={() => handleButtonClick(<ViewDrugs />)} style={{ backgroundColor: '#002b3c' }}>
            View Drugs
          </button>
          <button onClick={() => handleButtonClick(<DrugInventory />)} style={{ backgroundColor: '#002b3c' }}>
            Drug Inventory
          </button>
         
          
        </div>
        <div className="button-container">
          
        </div>
      </div>
      <div className="screen">
        <div className="screen-content">
          {displayComponent}
        </div>
      </div>
    </div>
  );
};

export default PharmacyDashboard;
