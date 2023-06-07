import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from '../Home/About.jsx';
import Navbar from '../Home/Navbar.jsx';
import Home from '../LandingPage/Home.jsx';
import ShoppingCart from '../Cart/shopping_cart.jsx';
import './App.css';
import LogIn from '../LogIn/LogIn.jsx';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Navbar/>
        <Routes>
          <Route path="/" element={ <Home />} />
          <Route path="/about" element={ <About />} />
          <Route path="/cart" element={<ShoppingCart />} /> 
          <Route path="/login" element={<LogIn />} />
        </Routes>
        </div>
    </BrowserRouter>
  );
 }
export default App;
