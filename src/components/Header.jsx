import { useState } from "react";
import { LOGO_URL } from "../utils/constants.js";

export const Header = () => {   
    const [loginButton, setLoginButton] = useState("Login");

    const handleLoginToggle = () => {
        setLoginButton(loginButton === "Login" ? "Logout" : "Login");
    };
    return (
        <div className="header">
             {console.log("Hello World")}
             {console.log("Hello World")}
            <div className="logo-container">
                <img className="logo" src={LOGO_URL} alt="Logo" />
            </div>
            <div className="nav-items" >
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact</li>
                    <li>Cart</li>
                    <button className="login-button" onClick={handleLoginToggle}>{loginButton}</button>
                </ul>
            </div>
        </div>
    )
}

export default Header;