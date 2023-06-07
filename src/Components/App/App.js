import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from '../Home/Navbar.jsx';
import Home from '../LandingPage/Home.jsx';
import Products from '../LandingPage/Products.jsx';
import Cart from '../Cart/ShoppingCart.jsx';
import Product from '../LandingPage/Product.jsx';
import LogIn from '../LogIn/LogIn.jsx';
import SignUp from '../SignUp/SignUp.jsx';
import Footer from '../Home/Footer.jsx';

function App() {

  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  const removeFromCart = (productId) => {
    const updatedCartItems = cartItems.filter((item) => item.id !== productId);
    setCartItems(updatedCartItems);
  };

  const clearCart = () => {
    setCartItems([]);
  };
  
  return (
    <BrowserRouter>
      <div className="app-container">
        <Navbar />
        <div className="content-container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart
              cartItems={cartItems}
              removeFromCart={removeFromCart}
              clearCart={clearCart}
            />} />
            <Route path="/products/*" element={<Products addToCart={addToCart} />} />
            <Route path="/products/:id" element={<Product addToCart={addToCart} />}/>
            <Route path="/login" element={<LogIn />} />
            <Route path="/signin" element={<SignUp />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
