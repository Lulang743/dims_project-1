import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './LoginPage.css';

const LoginPage = () => {
  const navigate = useNavigate();
    const [errors, setErrors] = useState({});

    const [values, setValues] = useState({
      username: '',
      password: ''
      });

      const handleSubmit = (e) => {
        
        e.preventDefault();
        axios.get('http://localhost:5000/loginndso', values)
           .then((res) => {
            navigate('/nDSODashboard'); // Navigate to the View page after submission
      })
      .catch((err) => {
        //setError('Error creating drug. Please try again.');
        console.log(err);
      });
        navigate('/');
    };

  return (
    <div className="login-container">
      <h2 className="login-title">NDSO SignIn</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <form onSubmit={handleSubmit} className="login-form">
        <div>
          <label>Email:</label>
          <input
            type="text"
            value={values.username}
            onChange={(e) => setValues({ ...values, username: e.target.value })}
            placeholder="Enter your email"
          />
          {error.includes('email') && <span className="error-message">{error}</span>}
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={values.password}
            onChange={(e) => setValues({ ...values, password: e.target.value })}
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
