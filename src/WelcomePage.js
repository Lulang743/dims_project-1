import React from 'react';
import './WelcomePage.css';
import { Link } from 'react-router-dom';

const WelcomePage = () => {
  return (
    <div className="welcome-container">
      <h1 className="title">Drug Information Management System</h1>
      <p className="register-text">Register as:</p>
      <div className="button-container">
        <Link to="/PharmacyRegistration" className='btn btn-primary'>Pharmacist</Link>
        <Link to="/NdsoRegistration" className='btn btn-primary'>NDSO</Link>
      </div>
    </div>
  );
};

export default WelcomePage;
