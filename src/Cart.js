import React from "react";
import "./App.css";
function Cart({ cart, count }) {
  return (
    <div className="cart-div">
      <h1 className="cart-title">Cart</h1>
      <div className="shopping-cart-holder">
        {cart.map((item) => (
          <div className="items" key={item.key}>
            {item.text}
          </div>
        ))}
        <div className="shopping-cart-counter">Total Items:{count}</div>
      </div>
    </div>
  );
}

export default Cart;
