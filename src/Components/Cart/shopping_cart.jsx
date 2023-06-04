import React, { useEffect, useState } from 'react';

function ShoppingCart() {
  const [cartItems, setCartItems] = useState([]);

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

  return (
    <div>
      <h2>Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul>
          {cartItems.map((item) => (
            <li key={item.id}>
              <h3>{item.title}</h3>
              <p>Price: ${item.price}</p>
              <p>Rating: {item.rating.rate}</p>
              <p>{item.rating.count} reviews</p>
              <img src={item.image} alt={item.title} />
              <button onClick={() => removeItemFromCart(item.id)}>Remove</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default ShoppingCart;
