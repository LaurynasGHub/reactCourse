import React from 'react';
import { NavLink } from 'react-router-dom';
import './navbar.scss';

function Navbar() {
  return (
    <nav className="nav-container">
      <h1>My shop</h1>
      <ul>
        <li>
          <NavLink to={'/'}>All items</NavLink>
        </li>
        <li>
          <NavLink to={'/my-card'}>My card</NavLink>
        </li>
        <li>Favorite</li>
      </ul>
    </nav>
  );
}

export default Navbar;
