import React from 'react';
import {Outlet, Link} from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <header>
                <div className = "logo" >
                    <img src ="my-ecommerce-app\public\images\logo.png" alt = "Logo"/>
                </div>
                <div className="company-name">Company Name</div>
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