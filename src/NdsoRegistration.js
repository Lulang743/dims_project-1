import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './NdsoRegistration.css';

const NdsoRegistration = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const navigate = useNavigate();

  const handleSignUp = (e) => {
    e.preventDefault();

    if (!fullName || !email || !phoneNumber || !password || !confirmPassword) {
      setError('Please fill in all fields.');
      return;
    }

    if (password !== confirmPassword) {
      setError('Passwords do not match.');
      return;
    }

    console.log('Signing up with:', { fullName, email, phoneNumber, password });

    setFullName('');
    setEmail('');
    setPhoneNumber('');
    setPassword('');
    setConfirmPassword('');
    setError('');

    navigate('/create');
  };

  const handleSignIn = (e) => {
    e.preventDefault();

    if (!email || !password) {
      setError('Please enter both email and password.');
      return;
    }

    console.log('Signing in with:', { email, password });

    setEmail('');
    setPassword('');
    setError('');

    navigate('/NdsoLoginPage');
  };

  return (
    <div className="registration-container">
      <div className="form-container">
        <h2 className="form-title">NDSO SignUp</h2>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <form className="registration-form">
          <div className="form-group">
            
            <input
              type="text"
              id="fullName"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              placeholder="Enter Full Name"
              required
            />
          </div>
          <div className="form-group">
            
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter Email"
              required
            />
          </div>
          <div className="form-group">
            
            <input
              type="text"
              id="phoneNumber"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              placeholder="Enter Phone Number"
              required
            />
          </div>
          <div className="form-group">
            
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter Password"
              required
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              id="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="Confirm Password"
              required
            />
          </div>
          <div className="form-group">
            <button type="submit" onClick={handleSignUp}>Sign Up</button>
    
          </div>
        </form>
        <div className="signin-link">
          Don't have an account? <Link to="/LoginPage">Sign Up</Link>
        </div>
      </div>
    </div>
  );
};

export default NdsoRegistration;
