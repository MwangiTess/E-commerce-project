import React, { useState } from 'react';
import './home.css'; 

const Header = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div>
      <nav className="navbar">
        <div className="navbar-brand">Wetto Shop</div>
        <div className="search-bar">
          <input
            type="text"
            value={searchTerm}
            onChange={handleSearch}
            placeholder="Search..."
          />
          <button onClick={() => console.log('Search:', searchTerm)}>Search</button>
        </div>
      </nav>
      <div>
      </div>
    </div>
  );
};

export default Header;
