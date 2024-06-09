import React, { useState } from 'react';

function Checkout(props) {
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState(''); 
  const { cart, clearCart } = props; 

  const handleSubmit = async (e) => {
    e.preventDefault();


    const orderData = {
      name,
      address,
      email,
      phone, 
      cart: cart.map((item) => ({
        drugName: item.drug_name,
        quantity: item.quantity,
        price: item.price,
      })), 
      totalPrice: calculateTotalPrice(cart), 
    };

    try {
      const response = await fetch('/api/orders', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(orderData),
      });

      if (response.ok) {
        alert('Order submitted successfully! Check your email for confirmation.');
        clearCart(); 
      } else {
        alert('An error occurred. Please try again later.');
        console.error('Error submitting order:', await response.text());
      }
    } catch (error) {
      console.error('Error submitting order:', error);
      alert('An error occurred. Please try again later.');
    }
  };

  const calculateTotalPrice = (cart) => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <div className='d-flex justify-content-center bg-dark align-items-center vh-100'>
      <div className='bg-white rounded w-9 p-3'>
        <h2>Checkout</h2>
        <form onSubmit={handleSubmit} className='table'>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">Name (Required)</label>
            <input type="text" className="form-control" id="name" value={name} onChange={(e) => setName(e.target.value)} required />
          </div>
          <div className="mb-3">
            <label htmlFor="address" className="form-label">Address (Required)</label>
            <textarea className="form-control" id="address" rows="3" value={address} onChange={(e) => setAddress(e.target.value)} required />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email (Required)</label>
            <input type="email" className="form-control" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
          </div>
          <div className="mb-3">
            <label htmlFor="phone" className="form-label">Phone Number (Optional)</label>
            <input type="tel" className="form-control" id="phone" value={phone} onChange={(e) => setPhone(e.value)} />
          </div>
        </form>
      </div>
    </div>
  );
}
export default Checkout;
