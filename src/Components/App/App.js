import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../Home/Home.jsx';
import About from '../Home/About.jsx';

import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={ <Home />} />
      <Route path="/about" element={ <About />} />
      </Routes>
    </BrowserRouter>
  );
 }
export default App;
