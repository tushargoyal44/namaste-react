import { useState } from "react";
import { LOGO_URL } from "../utils/constants.js";
import { Link } from "react-router-dom";
import React from "react";

export const Header = () => {   
    const [loginButton, setLoginButton] = useState("Login");

    const handleLoginToggle = () => {
        setLoginButton(loginButton === "Login" ? "Logout" : "Login");
    };
    return (
        <div className="header">
           
            <div className="logo-container">
                <img className="logo" src={LOGO_URL} alt="Logo" />
            </div>
            <div className="nav-items" >
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li> <Link to ="/about">About Us</Link></li>
                    <li><Link to="/contact-us">Contact Us</Link></li>
                    <li>Cart</li>
                    <button className="login-button" onClick={handleLoginToggle}>{loginButton}</button>
                </ul>
            </div>
        </div>
    )
}

export default Header;