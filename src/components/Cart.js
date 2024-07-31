import React, { useContext } from 'react';
import { CartContext } from '../contexts/CartContext.js';
import { Link } from 'react-router-dom';

function Cart() {
  const { cart, removeFromCart } = useContext(CartContext);

  return (
    <div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/cart">Cart</Link>
        <Link to="/checkout">Checkout</Link>
      </nav>
      <h1>Your Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          {cart.map((item) => (
            <div key={item.id} className="cart-item">
              <h2>{item.title}</h2>
              <p>${item.price} per night</p>
              <button onClick={() => removeFromCart(item.id)}>Remove</button>
            </div>
          ))}
          <h2>Total: ${cart.reduce((total, item) => total + item.price, 0)}</h2>
          <Link to="/checkout">Proceed to Checkout</Link>
        </div>
      )}
    </div>
  );
}

export default Cart;
