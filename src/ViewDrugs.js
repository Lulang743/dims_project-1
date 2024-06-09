import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import './PharmacyRegistration.css';

const ViewDrugs = () => {
    const navigate = useNavigate();
    const [errors, setErrors] = useState({});

    const [values, setValues] = useState({
        pharmacyName: '',
        pharmacyAddress: '',
        email: '',
        password: '',

        phoneNumber: ''
      });

    const handleSubmit = (e) => {
        //let formErrors = {};

        // Email validation
        //if (!email.includes('@')) {
          //  formErrors.email = "Invalid email format";
       // }//

        // Password validation
        //const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
        //if (!passwordRegex.test(password)) {
          //  formErrors.password = "Password must be at least 8 characters long and include both letters and numbers";
        //}

        //if (password !== confirmPassword) {
         //   formErrors.confirmPassword = "Passwords do not match";
        //}

        //if (Object.keys(formErrors).length > 0) {
          //  setErrors(formErrors);
            //return;
        //}

        // Assuming registration is successful, navigate to the pharmacy dashboard
       //console.log({ pharmacyName, pharmacyAddress, email, password, phoneNumber });
        e.preventDefault();
        axios.post('http://localhost:5000/create_pharmacist', values)
           .then((res) => {
            navigate('/loginPage'); // Navigate to the View page after submission
      })
      .catch((err) => {
        //setError('Error creating drug. Please try again.');
        console.log(err);
      });
        navigate('/Home');
    };

    return (
        <div className="registration-container">
            <form className="registration-form" onSubmit={handleSubmit}>
                <h2>Pharmacy SignUp</h2>
                <div className="form-group">
                    <input
                        type="text"
                        id="pharmacyName"
                        value={values.pharmacyName}
                        onChange={(e) => setValues({ ...values, pharmacyName: e.target.value })}
                        placeholder="Enter Pharmacy Name"
                        required
                    />
                </div>
                <div className="form-group">
                    <input
                        type="text"
                        id="pharmacyAddress"
                        value={values.pharmacyAddress}
                        onChange={(e) => setValues({ ...values, pharmacyAddress: e.target.value })}
                        placeholder="Enter Pharmacy Address"
                        required
                    />
                </div>
                <div className="form-group">
                    <input
                        type="email"
                        id="email"
                        value={values.email}
                        onChange={(e) => setValues({ ...values, email: e.target.value })}
                        placeholder="Enter Emailsssssssssssssssssss"
                        required
                    />
                    {errors.email && <span className="error-message">{errors.email}</span>}
                </div>
                <div className="form-group">
                    <input
                        type="password"
                        id="password"
                        value={values.password}
                        onChange={(e) => setValues({ ...values, password: e.target.value })}
                        placeholder="Enter Passwordsssssssssssssssssssssssss"
                        required
                    />
                    {errors.password && <span className="error-message">{errors.password}</span>}
                </div>
                <div className="form-group">
                    <input
                        type="text"
                        id="phoneNumber"
                        value={values.phoneNumber}
                        onChange={(e) => setValues({ ...values, phoneNumber: e.target.value })}
                        placeholder="Enter Phone Numberrrrrrrrrrrrrrrrrrrrrrrrrr"
                        required
                    />
                </div>
                <button type="submit">Register</button>
                <div className="signin-link">
                    Already have an account? <Link to="/LoginPage">Sign In</Link>
                </div>
            </form>
        </div>
    );
};

export default ViewDrugs;
