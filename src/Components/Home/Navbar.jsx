import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

const Navbar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const location = useLocation();

  const handleSearch = (e) => {
    e.preventDefault();
    onSearch(searchTerm);
    const searchQuery = searchTerm.trim();
    const searchPath = searchQuery ? `/products?search=${searchQuery}` : '/products';
    if (location.pathname !== searchPath) {
      window.location.href = searchPath;
    }
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
            <Link to="/products">Products</Link>
          </li>
          <li>
            <Link to="/cart">Cart</Link>
          </li>
        </ul>
      </div>
      <div className="search-container">
        <form onSubmit={handleSearch}>
          <input
            type="text"
            placeholder="Search..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button type="submit" className="search-button">
            Search
          </button>
        </form>
      </div>
      <div className="actions-container">
        <button className="account-button">Account</button>
        <Link to="/cart" className="cart-button">
          Cart
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;

