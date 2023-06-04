import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../Home/Home.jsx';
import About from '../Home/About.jsx';
import Navbar from '../Home/Navbar.jsx';
import ShoppingCart from '../Cart/shopping_cart.jsx';
import './App.css';

function App() {
  return (
    <BrowserRouter>
    <div>
      <Navbar/>
      <Routes>
      <Route path="/" element={ <Home />} />
      <Route path="/about" element={ <About />} />
      <Route path="/cart" element={<ShoppingCart />} /> 
      </Routes>
      </div>
    </BrowserRouter>
  );
 }
export default App;
