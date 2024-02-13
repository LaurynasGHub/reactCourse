import React from 'react';
import './navbar.scss';

function Navbar({ setTab }) {
  return (
    <nav className="nav-container">
      <h1>My shop</h1>
      <ul>
        <li
          onClick={() => {
            setTab('all');
          }}
        >
          All items
        </li>
        <li
          onClick={() => {
            setTab('card');
          }}
        >
          My card
        </li>
        <li>Favorite</li>
      </ul>
    </nav>
  );
}

export default Navbar;
