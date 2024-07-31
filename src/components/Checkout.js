import React, { useContext, useState } from 'react';
import { CartContext } from '../contexts/CartContext.js';
import { Link } from 'react-router-dom';

function Checkout() {
  const { cart } = useContext(CartContext);
  const [details, setDetails] = useState({ name: '', email: '', payment: '' });

  const handleChange = (e) => {
    setDetails({ ...details, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Booking confirmed!'); // Placeholder for actual booking logic
  };

  return (
    <div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/cart">Cart</Link>
        <Link to="/checkout">Checkout</Link>
      </nav>
      <h1>Checkout</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <div>
            <label>Name:</label>
            <input type="text" name="name" value={details.name} onChange={handleChange} required />
          </div>
          <div>
            <label>Email:</label>
            <input type="email" name="email" value={details.email} onChange={handleChange} required />
          </div>
          <div>
            <label>Payment Details:</label>
            <input type="text" name="payment" value={details.payment} onChange={handleChange} required />
          </div>
          <button type="submit" className='check_button'>Confirm Booking</button>
        </form>
      )}
    </div>
  );
}

export default Checkout;
