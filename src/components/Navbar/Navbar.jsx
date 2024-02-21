import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import './navbar.scss';

//components
import User from '../User/User';

function Navbar() {
  return (
    <nav className="nav-container">
      <h1>My Shop</h1>
      <ul>
        <li>
          <NavLink to="/">All items</NavLink>
        </li>
        <li>
          <NavLink to="/my-cart">My Cart</NavLink>
        </li>
        <li>
          <NavLink to="/favorite">Favorite</NavLink>
        </li>
      </ul>
      <User />
    </nav>
  );
}

export default Navbar;
