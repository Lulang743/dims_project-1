import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginPage.css';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const navigate = useNavigate();

  const validateEmail = (email) => {
    return email.includes('@');
  };

  const validatePassword = (password) => {
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    return passwordRegex.test(password);
  };

  const handleLogin = (e) => {
    e.preventDefault();

    // Basic validation
    if (!username || !password) {
      setError('Please enter both username and password.');
      return;
    }

    if (!validateEmail(username)) {
      setError('Invalid email format.');
      return;
    }

    if (!validatePassword(password)) {
      setError('Password must be at least 8 characters long and include both letters and numbers.');
      return;
    }

    // You can perform actual login logic here
    console.log('Logging in with:', { username, password });

    // Clear form fields and error after login attempt
    setUsername('');
    setPassword('');
    setError('');

    // Navigate to the NDSO Dashboard after successful login
    navigate('/NdsoDashboard');
  };

  return (
    <div className="login-container">
      <h2 className="login-title">NDSO SignIn</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <form onSubmit={handleLogin} className="login-form">
        <div>
          <label>Email:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Enter your email"
          />
          {error.includes('email') && <span className="error-message">{error}</span>}
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
          />
          {error.includes('Password') && <span className="error-message">{error}</span>}
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginPage;
