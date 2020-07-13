import React from 'react';
import icon from '../../../assets/LoginIcon.png'
import Aux from '../../../hoc/Aux';
function login() {
    return (
       
        <Aux>
            <img className = {'centered'} src = {icon} alt = ""/>
            <div>
                <form className = {'login'}>               
                    <input className = {'login-input'} type="text" title="username" placeholder="username" />
                    <input className = {'login-input'}  type="password" title="username" placeholder="password" />
                    <button className = {'login-button'} type="submit">Login</button>
                    <a href="forgot-password"> Forgot Password?</a>
                </form>
            </div>
        </Aux>
    
    );
}

export default login;