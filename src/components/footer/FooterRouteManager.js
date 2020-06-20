import React from 'react';
import Aux from '../../hoc/Aux';
import {Link} from 'react-router-dom';

const footerButtonManager = () => {

    return (
 <Aux>
    
    <nav>
        <div>
            <h3>TechEd Logo</h3> 
            <p>Copyright info</p>
       </div>
        <div>
            <div className = 'nav-links'>
                <Link to= '/about'>
                    <li>About</li>
                </Link>
                <Link to= '/careers'> 
                    <li>Careers</li>
                </Link>
                <Link to = '/sign-up'>
                    <li>Register</li>
                </Link>
                <Link to = '/login'>
                    <li>Login</li>
                </Link>
            </div>    
            <div className = 'nav-links'>
                <Link to = '/terms'>
                    <li>Terms</li>
                </Link>
                <Link to = '/FAQ'>
                    <li>FAQ</li>
                </Link>
                <Link to= '/pricing'>
                    <li>Pricing</li>
                </Link>
                <Link to = '/contact'>
                    <li>Contact Us</li>
                </Link>
          </div>  
      </div>
   </nav>
 </Aux>
    )
}
export default footerButtonManager;