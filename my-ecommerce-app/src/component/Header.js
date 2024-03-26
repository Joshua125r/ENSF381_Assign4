import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../public/images/logo.png';
import './Header.css';

const Header = () => {
    return (
        <div>
            <header>
                <div className="header-container">
                    <div className="logo">
                        <img src={logo} className="Company-logo" alt="logo" />
                    </div>
                    <div className="company-name">Company Name</div>
                </div>
                <nav>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/products">Products</Link></li>
                        <li><Link to="">Login</Link></li>
                    </ul>
                </nav>
            </header>
        </div>
    );
};

export default Header;
