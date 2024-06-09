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

  const validateEmail = (email) => {
    return email.includes('@');
  };

  const validatePassword = (password) => {
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    return passwordRegex.test(password);
  };

  const handleSignUp = (e) => {
    e.preventDefault();

    if (!fullName || !email || !phoneNumber || !password || !confirmPassword) {
      setError('Please fill in all fields.');
      return;
    }

    if (!validateEmail(email)) {
      setError('Invalid email format.');
      return;
    }

    if (!validatePassword(password)) {
      setError('Password must be at least 8 characters long and include both letters and numbers.');
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

    if (!validateEmail(email)) {
      setError('Invalid email format.');
      return;
    }

    console.log('Signing in with:', { email, password });

    setEmail('');
    setPassword('');
    setError('');

    navigate('/create');
  };

  return (
    <div className="registration-container">
      <div className="form-container">
        <h2 className="form-title">Sign Up</h2>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <form onSubmit={handleSignUp} className="registration-form">
          <div className="form-group">
            <label htmlFor="fullName">Full Name:</label>
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
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter Email"
              required
            />
            {error.includes('email') && <span className="error-message">{error}</span>}
          </div>
          <div className="form-group">
            <label htmlFor="phoneNumber">Phone Number:</label>
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
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter Password"
              required
            />
            {error.includes('Password') && <span className="error-message">{error}</span>}
          </div>
          <div className="form-group">
            <label htmlFor="confirmPassword">Confirm Password:</label>
            <input
              type="password"
              id="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="Confirm Password"
              required
            />
            {error.includes('match') && <span className="error-message">{error}</span>}
          </div>
          <button type="submit">Sign Up</button>
        </form>
      </div>
      <div className="form-container">
        <h2 className="form-title">Sign In</h2>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <form onSubmit={handleSignIn} className="registration-form">
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter Email"
              required
            />
            {error.includes('email') && <span className="error-message">{error}</span>}
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter Password"
              required
            />
            {error.includes('Password') && <span className="error-message">{error}</span>}
          </div>
          <button type="submit">Sign In</button>
        </form>
        <div className="signin-link">
          Don't have an account? <Link to="/register">Sign Up</Link>
        </div>
      </div>
    </div>
  );
};

export default NdsoRegistration;
