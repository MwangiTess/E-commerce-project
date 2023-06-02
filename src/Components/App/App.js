import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../Home/Home.jsx';
import About from '../Home/About.jsx';
import Navbar from '../Home/Navbar.jsx';

import './App.css';

function App() {
  return (
    <BrowserRouter>
    <div>
      <Navbar/>
      <Routes>
      <Route path="/" element={ <Home />} />
      <Route path="/about" element={ <About />} />
      </Routes>
      </div>
    </BrowserRouter>
  );
 }
export default App;
