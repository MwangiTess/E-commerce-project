import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <nav className="navbar">
      <div className="logo-container">
        <Link to="/" className="logo">
          Wetto Shop
        </Link>
      </div>
      <div className="options-container">
        <ul className="options">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/products">Products</Link>
          </li>
          <li>
            <Link to="/cart">Cart</Link>
          </li>
        </ul>
      </div>
      <div className="search-container">
        <input type="text" placeholder="Search..." />
        <button className="search-button">Search</button>
      </div>
      <div className="actions-container">
        <button className="account-button" onClick={toggleDropdown}>
          Account
        </button>
        {showDropdown && (
          <ul className="dropdown-menu">
            <li>
              <Link to="/signin">Sign In</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
          </ul>
        )}
        <Link to="/cart" className="cart-button">
          Cart
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
