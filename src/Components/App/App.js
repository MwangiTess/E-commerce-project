import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from '../Home/Navbar.jsx';
import Footer from '../Home/Footer.jsx';
import Home from '../LandingPage/Home.jsx';
import Products from '../LandingPage/Products.jsx';
import ShoppingCart from '../Cart/shopping_cart.jsx';
import Product from '../LandingPage/Product.jsx';
import Login from '../LogIn/Login.jsx';
import SignUp from '../SignUp/SignUp.jsx';
import './App.css';
import LogIn from '../LogIn/LogIn.jsx';

function App() {
  return (
    <BrowserRouter>
      <div className="app-container">
        <Navbar />
        <div className="content-container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<ShoppingCart />} />
            <Route path="/products/*" element={<Products />} />
            <Route path="/products/:id" element={<Product />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signin" element={<SignUp />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
