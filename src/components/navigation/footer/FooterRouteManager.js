import React from 'react';
import Aux from '../../../hoc/Aux';
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
                    <p className = {'header-link'}>About</p>
                </Link>
                <Link to= '/careers'> 
                    <p className = {'header-link'}>Careers</p>
                </Link>
                <Link to = '/sign-up'>
                    <p className = {'header-link'}>Register</p>
                </Link>
                <Link to = '/login'>
                    <p className = {'header-link'}>Login</p>
                </Link>
            </div>    
            <div className = 'nav-links'>
                <Link to = '/terms'>
                    <p className = {'header-link'}>Terms</p>
                </Link>
                <Link to = '/FAQ'>
                    <p className = {'header-link'}>FAQ</p>
                </Link>
                <Link to= '/pricing'>
                    <p className = {'header-link'}>Pricing</p>
                </Link>
                <Link to = '/contact'>
                    <p className = {'header-link'}>Contact Us</p>
                </Link>
          </div>  
      </div>
   </nav>
 </Aux>
    )
}
export default footerButtonManager;