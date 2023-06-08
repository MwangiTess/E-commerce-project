import React from 'react';
import './SignUp.css';
import { NavLink } from 'react-router-dom';

function SignUp(){

    return (
        <div className='Layout'>
            <div className="container">
                <h1 id="shopName">WETTO SHOP</h1>
                <h1 id="createAccount">Create an account</h1>
                <h3 id="connect">Connect with your friends today!</h3>
                <div id="signUpBox">
                    <input
                     type= "text"
                     name= "username"
                     placeholder= "Enter Your Username"
                     className='inputs'
                     /><br/>
                     <input
                     type= "email"
                     name= "useremail"
                     placeholder= "Enter Your Email"
                     className='inputs'
                     /><br/>
                     <input
                     type= "tel"
                     name= "usercontact"
                     placeholder= "Enter Your Phone Number"
                     className='inputs'
                     /><br/>
                     <input
                     type= "password"
                     name= "password"
                     placeholder= "Enter Your Password"
                     className='inputs'
                     /><br/>
                     <button id='s-btn'>
                        Sign Up
                     </button>
                </div>
                <p id='account'>
                    Already have an account? < NavLink to = "/login">Login</NavLink>
                </p>
            </div>
            <img className='image' src="/images/cart.jpg" alt="cart"/>
        </div>
    );
}

export default SignUp;