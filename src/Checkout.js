import React, { useState } from 'react';

function Checkout(props) {
  const [paymentMethod, setPaymentMethod] = useState('');
  const [name, setName] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');

  const handleCheckout = (e) => {
    e.preventDefault(); // Prevent default form submission behavior

    // Implement payment processing logic using your chosen payment gateway (e.g., Stripe, PayPal)
    // Here's a placeholder example for illustration:
    console.log("Processing payment...");

    // After successful payment, clear cart and redirect to confirmation page
    props.clearCart();
    props.navigate('/confirmation'); // Assuming a confirmation route exists
  }

  const handlePaymentMethodChange = (e) => {
    setPaymentMethod(e.target.value);
  }

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
      <form onSubmit={handleCheckout}>
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
              <input type="text" id="name" name="name" value={name} onChange={handleInputChange} required />
            </div>
            <div className="form-group">
              <label htmlFor="cardNumber">Card Number:</label>
              <input type="number" id="cardNumber" name="cardNumber" value={cardNumber} onChange={handleInputChange} required />
            </div>
            <div className="form-group">
              <label htmlFor="expiryDate">Expiry Date (MM/YY):</label>
              <input type="text" id="expiryDate" name="expiryDate" value={expiryDate} onChange={handleInputChange} required />
            </div>
            <div className="form-group">
              <label htmlFor="cvv">CVV:</label>
              <input type="number" id="cvv" name="cvv" value={cvv} onChange={handleInputChange} required />
            </div>
          </>
        )}
        <button type="submit" className="btn btn-primary" disabled={!paymentMethod}>Pay Now</button>
      </form>
    </div>
  );
}

export default Checkout;
