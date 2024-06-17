import React, { useState,useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Payments from './Payments';
import DropIn from 'braintree-web-drop-in-react';

function Checkout(props) {
  const [paymentMethod, setPaymentMethod] = useState('');
  const [name, setName] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [instance, setInstance] = useState(null);
  const [clientToken, setClientToken] = useState('');
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
    cvv: '' ,
    drug_name :'',
    quantity : '',
    amount: '',
    phone_number:'',
    payment_method_nonce:'Credit Card',
    status:'Pending'

  });
  const [valueses, setValueses] = useState({
    
    clientName: '',
    amount: '',
    payment_method_nonce:'Credit Card',
    status:'Pending'

  });

useEffect(() => {
    // Fetch the client token from the server
    axios.get('http://localhost:5000/client_token')
        .then(response => {
            setClientToken(response.data);
            setIsLoading(false);
        })
        .catch(error => {
            console.error('Error fetching client token:', error);
            setIsLoading(false);
        });
}, []);

const handlePay =  (event) => {

event.preventDefault();
axios.post('http://localhost:5000/process_payment', valueses)
  .then((res) => {
    navigate('/View'); // Navigate to the View page after submission
  })
  .catch((err) => {
    setError('Error creating drug. Please try again.');
    console.log(err);
  });
    
};


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
    <div className='container '>
      <h2>Checkout</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="paymentMethod">Order Details:</label>
        </div>
        {paymentMethod === 'creditCard' && (
          <>
           
          <div className="form-group mb-3">
          </div>
          <div className="d-flex form-group mb-3">
            <input
              type="text"
              className="form-control"
              placeholder=" Pharmacy name"
              value={values.drug_name}
              onChange={(e) => setValues({ ...values, drug_name: e.target.value })}
            />
            <input
              type="text"
              className="form-control"
              placeholder=" amount"
              value={values.drug_name}
              onChange={(e) => setValues({ ...values, drug_name: e.target.value })}
            />
          </div>
          </>
        )}
        {paymentMethod === 'Mpesa' && (
          <>
           
          <div className="form-group mb-3">
          </div>
         </>
        )}
        {paymentMethod === 'EcoCash' && (
          <>
           
          <div className="form-group mb-3">
          </div>
          <div className="d-flex form-group mb-3">
            <input
              type="text"
              className="form-control"
              placeholder=" drug name"
              value={values.drug_name}
              onChange={(e) => setValues({ ...values, drug_name: e.target.value })}
            />
            <input
              type="number"
              className="form-control"
              placeholder="Quantity"
              value={values.quantity}
              onChange={(e) => setValues({ ...values, quantity: e.target.value })}
            />
            <input
              type="number"
              className="form-control"
              placeholder="amount"
              value={values.amount}
              onChange={(e) => setValues({ ...values, amount: e.target.value })}
            />
          </div>
          </>
        )}
        {paymentMethod === 'CPay' && (
          <>
           
          <div className="form-group mb-3">
          </div>
          </>
        )}
        </form>

      <form onSubmit={handlePay}>
        <div className="form-group">
          <label htmlFor="paymentMethod">Payment Method:</label>
          <select id="paymentMethod" value={paymentMethod} onChange={handlePaymentMethodChange}>
            <option value="">Choose a Payment Method</option>
            <option value="creditCard">Credit Card</option>
            <option value="Mpesa">Mpesa Payment</option>
            <option value="EcoCash">EcoCash Payment</option>
            <option value="CPay">CPay Payment</option>
            {/* Add other payment methods if supported */}
          </select>
        </div>
        {paymentMethod === 'creditCard' && (
          <>
            <h1>Client Side</h1>
           
            {isLoading ? (
                <p>Loading payment options...</p>
            ) : clientToken ? (
                <DropIn
                    options={{ authorization:clientToken }}
                    onInstance={instance => setInstance(instance)}
                />
            ) : (
                <p>Failed to load payment options. Please try again later.</p>
            )}
            <div className='d-flex form-group mb-3'>
               <button type="submit" className="btn btn-primary" onClick={handlePay} >Pay Now</button>
    
            </div>
            
          </>
        )}
         {paymentMethod === 'Mpesa' && (
          <div className="form-group">
            <p>You Are Paying with Mpesa.</p>
            <div className="form-group">
              <label htmlFor="name">Name of Customer:</label>
              <input type="text" id="name" name="name" value={values.phone_number} onChange={(e) => setValues({ ...values, phone_number: e.target.value })}  required />
            </div>
            <div className="form-group">
              <label htmlFor="cardNumber">Phone Number:</label>
              <input type="number" id="cardNumber" name="cardNumber" value={values.phone_number} onChange={(e) => setValues({ ...values, phone_number: e.target.value })} required />
            </div> 
          </div>
        )} {paymentMethod === 'EcoCash' && (
          <div className="form-group">
               <p>You Are Paying with EcoCash.</p>
               <div className="form-group">
                   <label htmlFor="name">Name of Customer:</label>
                  <input type="text" id="name" name="name" value={values.card_name} onChange={(e) => setValues({ ...values, card_name: e.target.value })}  required />
               </div>
               <div className="form-group">
                 <label htmlFor="cardNumber">Phone Number:</label>
              <input type="number" id="cardNumber" name="cardNumber" value={values.phone_number} onChange={(e) => setValues({ ...values, phone_number: e.target.value })} required />
            </div> 
          </div>
        )}{paymentMethod === 'CPay' && (
          <div className="form-group">
               <p>You Are Paying with CPay.</p>
               <div className="form-group">
                   <label htmlFor="name">Name of Customer:</label>
                  <input type="text" id="name" name="name" value={values.card_name} onChange={(e) => setValues({ ...values, card_name: e.target.value })}  required />
               </div>
               <div className="form-group">
                 <label htmlFor="cardNumber">Phone Number:</label>
              <input type="number" id="cardNumber" name="cardNumber" value={values.phone_number} onChange={(e) => setValues({ ...values, phone_number: e.target.value })} required />
            </div> 
          </div>
        )}

        
        
      </form>
    </div>
  );
}

export default Checkout;
