import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function OrderDetails() {
  const { orderId } = useParams(); // Get order ID from route parameter
  const [orderData, setOrderData] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:5000/orders`) // Fetch order data by ID
      .then(res => setOrderData(res.data))
      .catch(err => console.log(err));
  },);

  if (!orderData) {
    return <p>Loading order details...</p>;
  }

  const { _id, date, customer, items, totalPrice, status } = orderData;

  return (
    <div className="container">
      <h2>Order Details (Order ID: {_id})</h2>
      <p>Order Date: {date}</p>
      {customer && ( // Check if customer data exists
        <div>
          <h3>Customer Details</h3>
          <p>Name: {customer.name}</p>
          <p>Email: {customer.email}</p>
          {/* ... other customer details if available ... */}
        </div>
      )}
      <h3>Ordered Items</h3>
      <table className="table">
        <thead>
          <tr>
            <th>Drug Name</th>
            <th>Quantity</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item, i) => (
            <tr key={i}>
              <td>{item.drug_name}</td>
              <td>{item.quantity}</td>
              <td>{item.price}</td>
            </tr>
          ))}
          <tr>
            <td colSpan="2">Total Price:</td>
            <td>{totalPrice}</td>
          </tr>
        </tbody>
      </table>
      <p>Order Status: {status}</p>
    </div>
  );
}

export default OrderDetails;
