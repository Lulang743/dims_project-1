import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import Checkout from './Checkout';

function View() {
  const [data, setData] = useState([]);
  const [cart, setCart] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get('http://localhost:5000/selected')
      .then(res => setData(res.data))
      .catch(err => console.log(err));
  }, []);

  const addToCart = (drug) => {
    const existingItem = cart.find(item => item.id === drug.id);

    if (existingItem) {
      setCart(cart.map(item => item.id === drug.id ? { ...item, quantity: item.quantity + 1 } : item));
    } else {
      setCart([...cart, { ...drug, quantity: 1, price: drug.price, sno: drug.sno }]);
    }
  };

  const removeFromCart = (itemId) => {
    setCart(cart.filter(item => item.id !== itemId));
  };

  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const clearCart = () => {
    setCart([]); // Function to clear cart after successful checkout
  };

  const onClick = () => {
    navigate('/checkout');
  }

  return (
    <div className='d-flex justify-content-center bg-primary align-items-center vh-100'>
      <div className='bg-white rounded w-90 p-3'>
        <h2>Drug List</h2>
        <Link to="/create" className='btn btn-success'>Add +</Link>
        <table className='table'>
          <thead>
            <tr>
              <th>SNO</th>
              <th>Drug Name</th>
              <th>Category</th>
              <th>Quantity</th>
              <th>Brand Name</th>
              <th>Drug Dosage</th>
              <th>Description</th>
              <th>Manufacturer</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {Array.isArray(data) && data.map((d, i) => (
              <tr key={i}>
                <td>{d.sno}</td>
                <td>{d.drug_name}</td>
                <td>{d.category}</td>
                <td>{d.quantity}</td>
                <td>{d.brand_name}</td>
                <td>{d.drug_dosage}</td>
                <td>{d.description}</td>
                <td>{d.manufacturer}</td>
                <td>{d.price}</td>
                <td>
                  <button onClick={() => addToCart(d)} className='btn btn-sm btn-success'>Add to Cart</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <h2>Cart Items</h2>
        {cart.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <table className='table'>
            <thead>
              <tr>
                <th>Drug Name</th>
                <th>Quantity</th>
                <th>Price</th>
                <th>SNO</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item, i) => (
                <tr key={i}>
                  <td>{item.drug_name}</td>
                  <td>{item.quantity}</td>
                  <td>{item.price * item.quantity}</td>  {/* Display total price per item */}
                  <td>{item.sno}</td>
                  <td>
                    <button onClick={() => removeFromCart(item.id)} className='btn btn-sm btn-danger'>Remove</button>
                  </td>
                </tr>
              ))}
              <tr>
                <td colSpan="3">Total Price:</td>
                <td>{getTotalPrice()}</td>  {/* Display total cart price */}
              </tr>
            </tbody>
          </table>
        )}
        <button onClick={onClick} className='btn btn-primary' disabled={cart.length === 0}>Checkout</button>
      </div>
    </div>
  );

}

export default View;
