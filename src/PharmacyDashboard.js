import React from 'react';
import {Link, useNavigate } from 'react-router-dom';
import './pharmacyDashboard.css';
import logo from './assets/icons8-doctor-48.png'; // Import the logo image

const Sidebar = ({ onSelect }) => {
  const navigate = useNavigate();

  const handleSelect = (section) => {
    if (section === 'Add drug') {
      navigate('/create'); // Navigate to the Create page
    } else if (section === 'View stock') {
      navigate('/view'); // Navigate to the View page
    } else if (section === 'Order') {
      navigate('/checkout'); // Navigate to the Checkout page
    } else if (section === 'dashboard') {
      navigate('/update'); // Navigate to the WelcomePage
    } else {
      onSelect(section); // Update the selected section state
    }
  };

  return (
    <div className="sidebar">
      <h2>Pharmacist</h2>
      <img src={logo} alt="Pharmacist Logo" className="logo" />
      <ul>
      <Link to="/ndsoRegistration" className='btn btn-success'>Dashboard</Link>
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
    </div>
  );
};

export default Sidebar;
