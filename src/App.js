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
  //a state for items already added and a state for new items maybe

  //a function to increase the total number of items in the cart (can be seen next to shopping cart icon and item total on cart page)
  function increaseTotal() {
    setTotalCount(prevCount => prevCount + 1)
  }

  //a function to push the item into the cart
//doesnt add the very first item right now
  function addToCart(e) {
    setCart((cart) => [
      ...cart, 
      (e.target.id), ]);
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

        <Route exact path="/cart" component={Cart}
        cart={cart}
        />
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
