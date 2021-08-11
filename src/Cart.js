import React from 'react';
import './App.css';

function Cart({cart}) {
  return (
    <div>
        <h1>Cart</h1>
        <div className="shopping-cart-holder">
            {cart}
        </div>
    </div>
  );
}

export default Cart;