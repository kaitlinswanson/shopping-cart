import React from 'react';
import './App.css';
import Nav from './Nav';
import Shop from './Shop';
import Cart from './Cart';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


function App() {
  return (
    <Router>
    <div className="App">
        <Nav />
        <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/shop" component={Shop}/>
        <Route exact path="/cart" component={Cart}/>
        </Switch>
    </div>
    </Router>
  );
}

const Home = () => {
  return (
    <div>
      <h1>HOME</h1>
    </div>
  )
}

export default App;
