import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import DropIn from 'braintree-web-drop-in-react';

function Payments() {
    const [isLoading, setIsLoading] = useState(true);
    const [instance, setInstance] = useState(null);
    const [clientToken, setClientToken] = useState('');

    const [error, setError] = useState(''); // Added error state

    const navigate = useNavigate();

    const [values, setValues] = useState({
    
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
    axios.post('http://localhost:5000/process_payment', values)
      .then((res) => {
        navigate('/View'); // Navigate to the View page after submission
      })
      .catch((err) => {
        setError('Error creating drug. Please try again.');
        console.log(err);
      });
        
    };

    return (
        <div>
            <h1>Client Side</h1>
            <input
                type="text"
                placeholder="Client Name"
                value={values.clientName}
                onChange={(e) => setValues({ ...values, clientName: e.target.value })}
            />
            <input
                type="number"
                placeholder="Amount"
                value={values.amount}
                onChange={(e) => setValues({ ...values, amount: e.target.value })}
            />
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
            <button onClick={handlePay} disabled={!instance}>Pay</button>
        </div>
    );
}

export default Payments;


