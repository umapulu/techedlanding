import React from 'react';
import '../../containers/App.css';
import {Link} from 'react-router-dom';

const headerRouteManager = () => {

    return (
    <nav>
        <div>
            <Link to = '/'>
                <h3>TechEd Logo</h3>
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