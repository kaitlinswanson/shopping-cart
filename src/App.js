import React, { useState }from 'react';
import './App.css';
import Nav from './Nav';
import Shop from './Shop';
import Cart from './Cart';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


function App() {

  const [cart, setCart] = useState([]);
  //item in cart will be made up of item name, quantity(up and down arrow), delete option
  const [count, setTotalCount] = useState(0)
  
  //a function to increase the total number of items in the cart (can be seen next to shopping cart icon and item total on cart page)
  function increaseTotal() {
    setTotalCount(prevCount => prevCount + 1)
  }

  //a function to push the item into the cart
  function addToCart(e) {
    setCart((cart) => [
      ...cart, 
      {text: e.target.id, key: Math.random() * 1000, quantity: (parseFloat(e.target.value) + 1)}]);
      console.log(cart)
      }

    
  return (
    <Router>
    <div className="App">
        <Nav 
        count={count}/>
        <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/shop">
          <Shop 
            increaseTotal={increaseTotal}
            setCart={setCart}
            addToCart={addToCart}
          />
        </Route>

        <Route exact path="/cart">
          <Cart 
            cart={cart}
            count={count}
          />
        </Route> 
        
      
        </Switch>
    </div>
    </Router>
  );
}

const Home = () => {
  return (
    <div>
      <img id="home-image" alt="90s skateboarding girl" src="https://i1.sndcdn.com/artworks-jpIdvMOSCrtojB1f-Hwux6A-t500x500.jpg"></img>
    </div>
  )
}

export default App;
