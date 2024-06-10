import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import './LoginPage.css';

const LoginPages = () => {
  const navigate = useNavigate();
    const [errors, setErrors] = useState({});

    const [values, setValues] = useState({
      username: '',
      password: ''
      });

    const handleSubmit = (e) => {
        
        e.preventDefault();
        axios.post('http://localhost:5000/login', values)
           .then((res) => {
            navigate('/'); // Navigate to the View page after submission
      })
      .catch((err) => {
        //setError('Error creating drug. Please try again.');
        console.log(err);
      });
        navigate('/Dashboard');
    };

  return (
    <div className="login-container">
      <h2 className="login-title">NDSO SignIn</h2>
      <form onSubmit={handleSubmit} className="login-form">
        <div>
          <label>Email:</label>
          <input
            type="text"
            value={setValues.username}
            onChange={(e) => setValues({ ...values, username: e.target.value })}
            placeholder="Enter your email"
          />
   
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={setValues.password}
            onChange={(e) => setValues({ ...values, password: e.target.value })}
            placeholder="Enter your password"
          />
         
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginPages;
