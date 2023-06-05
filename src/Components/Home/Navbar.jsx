import React from 'react';
import Header from '../Home/Header.jsx';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
      <Header />
    <nav>
      <div className="options">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/cart">Cart</Link>
          </li>
        </ul>
      </div>
    </nav>
    </div>
  );
};

export default Navbar;
