import React from "react";
import { Link, link } from 'react-router-dom';

function Navbar() {
    return (
        <nav>
           <li><Link to="/">Home</Link></li> 
           <li><Link to="/products">Products</Link></li>
           <li><Link to="/cart">My Cart</Link></li>
        </nav>
    );
}
export default Navbar;