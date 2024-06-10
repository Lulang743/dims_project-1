import React from 'react';

function Checks({ cart, getTotalPrice, removeFromCart }) {
  return (
    <div>
      <h2>Checkout</h2> (
        <table className='table'>
          <thead>
            <tr>
              <th>Drug Name</th>
              <th>Quantity</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {cart.map((item, i) => (
              <tr key={i}>
                <td>{item.drug_name}</td>
                <td>{item.quantity}</td>
                <td>{item.price * item.quantity}</td>
                <td>
                  <button onClick={() => removeFromCart(item.id)} className='btn btn-sm btn-danger'>Remove</button>
                </td>
              </tr>
            ))}
            <tr>
              <td colSpan="2">Total Price:</td>
              <td>{getTotalPrice()}</td>
            </tr>
          </tbody>
        </table>
      )
      {/* ... (your checkout form and logic here) */}
    </div>
  );
}

export default Checks;
