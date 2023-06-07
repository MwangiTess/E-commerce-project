import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from '../Home/Navbar.jsx';
import Home from '../LandingPage/Home.jsx';
import Products from '../LandingPage/Products.jsx';
import Cart from '../Cart/shopping_cart.jsx';
import Product from '../LandingPage/Product.jsx';
import Login from '../LogIn/Login.jsx';
import SignUp from '../SignUp/SignUp.jsx';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/products/*" element={<Products />} />
          <Route path="/products/:id" element={<Product />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signin' element={<SignUp />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

