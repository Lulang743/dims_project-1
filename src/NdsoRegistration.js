import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import './NdsoRegistration.css';

const NdsoRegistration = () => {
  const navigate = useNavigate();
  const [error, setErrors] = useState({});

  const [values, setValues] = useState({
      fullName: '',
      email: '',
      phoneNumber:'',
      password: ''
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
      axios.post('http://localhost:5000/create_ndso', values)
         .then((res) => {
          navigate('/ndsologinPage'); // Navigate to the View page after submission
    })
    .catch((err) => {
      //setError('Error creating drug. Please try again.');
      console.log(err);
    });
      navigate('/');
  };

  return (
    <div className="registration-container">
      <div className="form-container">
        <h2 className="form-title">NDSO SignUp</h2>
        <form className="registration-form" onSubmit={handleSubmit}>
          <div className="form-group">
            
            <input
              type="text"
              id="fullName"
              value={values.fullName}
              onChange={(e) => setValues({ ...values, fullName: e.target.value })}
              placeholder="Enter Full Name"
              required
            />
          </div>
          <div className="form-group">
            
            <input
              type="email"
              id="email"
              value={values.email}
              onChange={(e) => setValues({ ...values, email: e.target.value })}
              placeholder="Enter Email"
              required
            />
          </div>
          <div className="form-group">
            
            <input
              type="text"
              id="phoneNumber"
              value={values.phoneNumber}
              onChange={(e) => setValues({ ...values, phoneNumber: e.target.value })}
              placeholder="Enter Phone Number"
              required
            />
          </div>
          <div className="form-group">
            
            <input
              type="password"
              id="password"
              value={values.password}
              onChange={(e) => setValues({ ...values, password: e.target.value })}
              placeholder="Enter Password"
              required
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              id="confirmPassword"
              placeholder="Confirm Password"
              required
            />
          </div>
          <div className="form-group">
            <button type="submit" onClick={handleSubmit}>Sign Up</button>
    
          </div>
        </form>
        <div className="signin-link">
          Don't have an account? <Link to="/ndsologinPage">Sign Up</Link>
        </div>
      </div>
    </div>
  );
};

export default NdsoRegistration;
