import React, { useState } from 'react';
import axios from 'axios';

import './Login.css'; // Import your CSS file for styling

const Login = ({ onLogin }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleLogin = () => {
        if (!email || !password) {
            setError('Please enter both email and password');
            return;
        }

        axios.post('http://localhost:3000/login', { email, password })
            .then(response => {
                if (response.data.success) {
                    onLogin(); // Call parent callback to handle login state change
                } else {
                    setError(response.data.message || 'Login failed');
                }
            })
            .catch(error => {
                console.error('Error logging in:', error);
                setError('Something went wrong. Please try again later.');
            });
    };

    return (
        <div className="login-container">
            <h2>Login</h2>
            {error && <div className="error-message">{error}</div>}
            <div className="form-group">
                <label>Email:</label>
                <input type="email" value={email} onChange={e => setEmail(e.target.value)} />
            </div>
            <div className="form-group">
                <label>Password:</label>
                <input type="password" value={password} onChange={e => setPassword(e.target.value)} />
            </div>
            <button onClick={handleLogin}>Login</button>
            <div className="register-link">
                <p>No account? <a href="/register">Click here to register</a></p>
            </div>
        </div>
    );
};

export default Login;
