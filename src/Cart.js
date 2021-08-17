import React from 'react';
import './App.css';

function Cart({cart}) {

  return (
    <div>
        <h1>Cart</h1>
        <div className="shopping-cart-holder">
            {cart.map((item) => (
              <div className="items" key={item.key}>{item.text}</div>
            )
            )
            }
        </div>
    </div>
  );
}

export default Cart;