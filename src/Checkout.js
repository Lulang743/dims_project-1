import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Checkout(props) {
  const [paymentMethod, setPaymentMethod] = useState('');
  const [name, setName] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');

  const handleCheckout = async (e) => {
    e.preventDefault(); 

    const orderDetails = {
      paymentMethod: paymentMethod,
      name: name,
      items: props.cart,
    
    };

    try {
      
    } catch (error) {
      console.error("Error submitting order:", error);
    }
  }

  const handlePaymentMethodChange = (e) => {
    setPaymentMethod(e.target.value);
  }
  const [error, setError] = useState(''); // Added error state

  const navigate = useNavigate();

  const [values, setValues] = useState({
    
    card_name: '',
    card_number: '',
    cvv: '' 
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post('http://localhost:5000/orderss', values)
      .then((res) => {
        navigate('/View'); // Navigate to the View page after submission
      })
      .catch((err) => {
        setError('Error creating drug. Please try again.');
        console.log(err);
      });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'cardNumber':
        setCardNumber(value);
        break;
      case 'expiryDate':
        setExpiryDate(value);
        break;
      case 'cvv':
        setCvv(value);
        break;
      default:
        break;
    }
  }

  return (
    <div className='container'>
      <h2>Checkout</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="paymentMethod">Payment Method:</label>
          <select id="paymentMethod" value={paymentMethod} onChange={handlePaymentMethodChange}>
            <option value="">Choose a Payment Method</option>
            <option value="creditCard">Credit Card</option>
            {/* Add other payment methods if supported */}
          </select>
        </div>
        {paymentMethod === 'creditCard' && (
          <>
            <div className="form-group">
              <label htmlFor="name">Name on Card:</label>
              <input type="text" id="name" name="name" value={values.card_name} onChange={(e) => setValues({ ...values, card_name: e.target.value })}  required />
            </div>
            <div className="form-group">
              <label htmlFor="cardNumber">Card Number:</label>
              <input type="number" id="cardNumber" name="cardNumber" value={values.card_number} onChange={(e) => setValues({ ...values, card_number: e.target.value })} required />
            </div>
            <div className="form-group">
              <label htmlFor="expiryDate">Expiry Date (MM/YY):</label>
              <input type="text" id="expiryDate" name="expiryDate" value={values.expiry_date} onChange={(e) => setValues({ ...values, expiry_date: e.target.value })} required />
            </div>
            <div className="form-group">
              <label htmlFor="cvv">CVV:</label>
              <input type="number" id="cvv" name="cvv" value={values.cvv} onChange={(e) => setValues({ ...values, cvv: e.target.value })} required />
            </div>
          </>
        )}
        <button type="submit" className="btn btn-primary" onClick={handleSubmit} >Pay Now</button>
      </form>
    </div>
  );
}

export default Checkout;
