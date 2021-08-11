import React from 'react';
import './App.css';
import {Link} from 'react-router-dom';

function Nav() {

    const navStyle = {
        color: 'white'
    };

  return (
    <nav>
        <Link style={navStyle} to='/'>
        <h2 className="home-link">Nostalgia</h2>
        </Link>
        <ul className="nav-links">
            <Link style={navStyle} to='/shop'>
                <li>Shop</li>
            </Link>
            <Link style={navStyle} to='/cart'>
                <li><i class="fas fa-shopping-cart"></i></li>
            </Link>
        </ul>
    </nav>
  );
}

export default Nav;
