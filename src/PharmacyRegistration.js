import React, { useState } from 'react';
import axios from 'axios';
import './RegistrationForm.css';
import Login from './Login';

const PharmacyRegistration = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [otp, setOtp] = useState('');
    const [isOtpSent, setIsOtpSent] = useState(false);
    const [showLogin, setShowLogin] = useState(false);

    const handleRegister = () => {
        // Validation logic
        if (!name || !email || !password || !confirmPassword || !phoneNumber) {
            alert('All fields are required');
            return;
        }

        if (password.length < 8) {
            alert('Password should be at least 8 characters long');
            return;
        }

        if (!/[A-Z]/.test(password)) {
            alert('Password should include at least one uppercase letter');
            return;
        }

        if (!/[a-z]/.test(password)) {
            alert('Password should include at least one lowercase letter');
            return;
        }

        if (!/[0-9]/.test(password)) {
            alert('Password should include at least one number');
            return;
        }

        if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
            alert('Password should include at least one special character');
            return;
        }

        if (password !== confirmPassword) {
            alert('Passwords do not match');
            return;
        }

        axios.post('http://localhost:3000/register', { name, email, password, phoneNumber })
            .then(response => {
                alert(response.data.message);
                setIsOtpSent(true);
            })
            .catch(error => {
                console.error(error);
                alert('Error: Something went wrong');
            });
    };

    const handleVerify = () => {
        // Verification logic
        if (!otp) {
            alert('OTP is required');
            return;
        }

        axios.post('http://localhost:3000/verify', { email, otp })
            .then(response => {
                alert(response.data.message);
                if (response.data.verified) {
                    // Redirect to login page upon successful OTP verification
                    setShowLogin(true);
                }
            })
            .catch(error => {
                console.error(error);
                alert('Error: Something went wrong');
            });
    };

    const handleLoginClick = () => {
        setShowLogin(true); // Show the login component
    };

    if (showLogin) {
        return <Login />;
    }

    return (
        <div className="container">
            {!isOtpSent ? (
                <>
                    <div>
                        <label>Name:</label>
                        <input type="text" value={name} onChange={e => setName(e.target.value)} />
                    </div>
                    <div>
                        <label>Email:</label>
                        <input type="email" value={email} onChange={e => setEmail(e.target.value)} />
                    </div>
                    <div>
                        <label>Password:</label>
                        <input type="password" value={password} onChange={e => setPassword(e.target.value)} />
                    </div>
                    <div>
                        <label>Confirm Password:</label>
                        <input type="password" value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)} />
                    </div>
                    <div>
                        <label>Phone Number:</label>
                        <input type="text" value={phoneNumber} onChange={e => setPhoneNumber(e.target.value)} />
                    </div>
                    <button onClick={handleRegister}>Register</button>
                    <div className="login-link">
                        <p>Already have an account? <span onClick={handleLoginClick} className="login-link">Click here to login</span></p>
                    </div>
                </>
            ) : (
                <>
                    <div>
                        <label>Enter OTP:</label>
                        <input type="text" value={otp} onChange={e => setOtp(e.target.value)} />
                    </div>
                    <button onClick={handleVerify}>Verify</button>
                </>
            )}
        </div>
    );
};

export default PharmacyRegistration;
