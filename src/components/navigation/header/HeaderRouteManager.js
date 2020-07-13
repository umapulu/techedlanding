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
        <div className = 'nav-links'>
            <Link to= '/about'>
                <b className = {'header-link'}>About</b>
            </Link>
            <Link to= '/pricing'>
                <b className = {'header-link'} >Pricing</b>
            </Link>
            <Link to = '/our-difference'>
                <b className = {'header-link'}>Our Difference</b>
            </Link>
            <Link to = '/contact'>
                <b className = {'header-link'}>Contact</b>
            </Link>
            <Link to = '/login'>
                <button>Login</button>
            </Link>
            <Link to = '/sign-up'>
                <button>Sign Up</button>
            </Link>
        </div>
    </nav>
    )
}
export default headerRouteManager;