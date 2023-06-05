import React, { useState } from 'react';
import './home.css'; 

const Home = () => {
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
        <p>This is my home page</p>
      </div>
    </div>
  );
};

export default Home;
