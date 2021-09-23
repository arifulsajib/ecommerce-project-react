import React from 'react';
import "./Header.css";
import logo from "../../images/logo.png"

const Header = () => {
    return (
        <div className="header">
            <img src={logo} alt="" />
            <nav>
                <ul>
                    <li> <a href="/Shop">Shop</a> </li>
                    <li> <a href="/Shop">Order Review</a> </li>
                    <li> <a href="/Shop">Manage inventory Here</a> </li>
                </ul>
            </nav>
        </div>
    );
};

export default Header;