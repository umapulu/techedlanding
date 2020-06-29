import React from 'react';
import '../Navigation.css';
import {Link} from 'react-router-dom';
import logo from '../../../assets/TechEdLogo.png';

const headerRouteManager = () => {

    return (
    <nav>
        <div>
            <Link to = '/'>
            <img src = {logo} alt = ""/>
            </Link>  
        </div>
        <ul className = 'nav-links'>
            <Link to= '/about'>
                <li>About</li>
            </Link>
            <Link to= '/pricing'>
                <li>Pricing</li>
            </Link>
            <Link to = '/our-difference'>
                <li>Our Difference</li>
            </Link>
            <Link to = '/contact'>
                <li>Contact</li>
            </Link>
            <Link to = '/login'>
                <li>Login</li>
            </Link>
            <Link to = '/sign-up'>
                <li>Sign Up</li>
            </Link>
        </ul>
    </nav>
    )
}
export default headerRouteManager;