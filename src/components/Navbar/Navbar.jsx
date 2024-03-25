import React from 'react';
import { NavLink } from 'react-router-dom';
import './navbar.scss';

//components
import User from '../User/User';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faCartShopping } from '@fortawesome/free-solid-svg-icons';

function Navbar() {
  return (
    <nav className="nav-container">
      <h1 className="title">My Shop</h1>
      <ul>
        <li>
          <NavLink to="/">All items</NavLink>
        </li>
        <li>
          <FontAwesomeIcon icon={faCartShopping} />
          <NavLink className="myCart" to="/my-cart">
            My Cart
          </NavLink>
        </li>
        <li>
          <FontAwesomeIcon icon={faHeart} />
          <NavLink className="myCart" to="/favorite">
            Favorite
          </NavLink>
        </li>
        <li>
          <NavLink className="myCart" to="/admin">
            Admin
          </NavLink>
        </li>
      </ul>
      <User />
    </nav>
  );
}

export default Navbar;
