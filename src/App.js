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
      <img id="home-image" alt="90s skateboarding girl" src="https://i1.sndcdn.com/artworks-jpIdvMOSCrtojB1f-Hwux6A-t500x500.jpg"></img>
    </div>
  )
}

export default App;
