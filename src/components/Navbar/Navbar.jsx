import React from 'react';
import './navbar.scss';

function Navbar() {
  return (
    <nav className="nav-container">
      <h1>My shop</h1>
      <ul>
        <li>Favourites</li>
        <li>Shopping cart</li>
      </ul>
    </nav>
  );
}

export default Navbar;
