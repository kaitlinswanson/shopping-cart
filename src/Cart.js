import React from 'react';
import './App.css';
//add a useEffect for 'your cart is empty' if no items in cart 
function Cart({cart}) {

  return (
    <div className="cart-div">
        <h1 className="cart-title">Cart</h1>
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