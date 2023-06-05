import React, { useEffect, useState } from 'react';
import './ShoppingCart.css';

function ShoppingCart() {
  const [cartItems, setCartItems] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetchCartItems();
  }, []);

  const fetchCartItems = async () => {
    try {
      const response = await fetch('https://fakestoreapi.com/carts/userId');
      const data = await response.json();
      if (Array.isArray(data)) {
        setCartItems(data);
      } else {
        console.log('Invalid cart items data:', data);
        setCartItems([]);
      }
    } catch (error) {
      console.log('Error fetching cart items:', error);
    }
  };
  
  const removeItemFromCart = (itemId) => {
    const updatedCartItems = cartItems.filter(item => item.id !== itemId);
    setCartItems(updatedCartItems);
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredCartItems = cartItems.filter(item =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="shopping-cart-container">
      <h2 className="shopping-cart-title">Shopping Cart</h2>
      <div className="search-bar">
        <input
          type="text"
          value={searchTerm}
          onChange={handleSearch}
          placeholder="Search..."
        />
        <button onClick={() => console.log('Search:', searchTerm)}>Search</button>
      </div>
      {filteredCartItems.length === 0 ? (
        <p className="no-matching-items">No matching items found in your cart.</p>
      ) : (
        <ul className="cart-items-list">
          {filteredCartItems.map((item) => (
            <li className="cart-item" key={item.id}>
              <h3 className="item-title">{item.title}</h3>
              <p className="item-price">Price: ${item.price}</p>
              <p className="item-rating">Rating: {item.rating.rate}</p>
              <p className="item-review-count">{item.rating.count} reviews</p>
              <img className="item-image" src={item.image} alt={item.title} />
              <button className="remove-button" onClick={() => removeItemFromCart(item.id)}>Remove</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default ShoppingCart;
