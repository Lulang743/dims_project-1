import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './style.css';

const Update = () =>{
  const [values, setValues] = useState({
    sno: '',
    drug_name: '',
    category: '',
    quantity: '',
    brand_name: '',
    drug_dosage: '',
    description: '',
    manufacturer: '',
    price :'',
    manufactured_date: '',
    expiry_date: ''
  });
  const [error, setError] = useState(''); // Added error state

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post('http://localhost:5000/create_drug', values)
      .then((res) => {
        navigate('/View'); // Navigate to the View page after submission
      })
      .catch((err) => {
        setError('Error creating drug. Please try again.');
        console.log(err);
      });
  };

  return (
    <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
      <div className="form-container bg-white p-4 rounded shadow">
        <form onSubmit={handleSubmit}>
          <h2 className="mb-4">Add Drug</h2>
          {error && <p className="text-danger">{error}</p>}
          <div className="d-flex form-group mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="SNO"
              value={values.sno}
              onChange={(e) => setValues({ ...values, sno: e.target.value })}
            />

            <input
              type="text"
              className="form-control"
              placeholder="Drug Name"
              value={values.drug_name}
              onChange={(e) => setValues({ ...values, drug_name: e.target.value })}
            />
          </div>
          <div className="form-group mb-3">
           
          </div>
          <div className="d-flex form-group mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Category"
              value={values.category}
              onChange={(e) => setValues({ ...values, category: e.target.value })}
            />
            <input
              type="number"
              className="form-control"
              placeholder="Quantity"
              value={values.quantity}
              onChange={(e) => setValues({ ...values, quantity: e.target.value })}
            />
          </div>
          <div className="d-flex form-group mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Brand Name"
              value={values.brand_name}
              onChange={(e) => setValues({ ...values, brand_name: e.target.value })}
            />
             <input
              type="text"
              className="form-control"
              placeholder="Drug Unit"
              value={values.drug_dosage}
              onChange={(e) => setValues({ ...values, drug_dosage: e.target.value })}
            />
          </div>
          <div className="d-flex form-group mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Description"
              value={values.description}
              onChange={(e) => setValues({ ...values, description: e.target.value })}
            />
            
          </div>
          <div className="d-flex form-group mb-3 ">
            <input
              type="text"
              className="form-control"
              placeholder="Price"
              value={values.price}
              onChange={(e) => setValues({ ...values, price: e.target.value })}
            />
            <input
              type="text"
              className="form-control"
              placeholder="Manufacturer"
              value={values.manufacturer}
              onChange={(e) => setValues({ ...values, manufacturer: e.target.value })}
            />
          </div>
          <div className="form-group mb-3">
            <label htmlFor="manufactured_date">Manufacture Date</label>
            <input
              type="date"
              id="manufactured_date"
              className="form-control"
              value={values.manufactured_date}
              onChange={(e) => setValues({ ...values, manufactured_date: e.target.value })}
            />
          </div>
          <div className="form-group mb-3">
            <label htmlFor="expiry_date">Expiry Date</label>
            <input
              type="date"
              id="expiry_date"
              className="form-control"
              value={values.expiry_date}
              onChange={(e) => setValues({ ...values, expiry_date: e.target.value })}
            />
          </div>
          
          <button type="submit" className="btn btn-success w-100">Submit</button>
        </form>
      </div>
    </div>
  );
  
}

export default Update;
