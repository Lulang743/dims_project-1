import React, { useState } from 'react';
import axios from 'axios';

function Supplier() {
    const [payments, setPayments] = useState([]);

    const handleViewOrders = () => {
        axios.get('http://localhost:5000/get_payments')
        .then(response => {
            setPayments(response.data);
        })
        .catch(error => {
            console.error(error);
        });
    };

    return (
        <div>
            <h1>Supplier Side</h1>
            <button onClick={handleViewOrders}>View Orders</button>
            <ul>
                {payments.map(payment => (
                    <li key={payment.id}>
                        {payment.client_name} paid {payment.amount} (Order ID: {payment.order_id})
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Supplier;
