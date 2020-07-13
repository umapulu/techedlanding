import React from 'react';
import icon from '../../../assets/LoginIcon.png'
function login() {
    return (
       
        <div className = {'login-image'}>
            <img src = {icon} alt = ""/>
            <form className = {'login'}>               
                <input className = {'login-input'} type="text" title="username" placeholder="username" />
                <input className = {'login-input'}  type="password" title="username" placeholder="password" />
                <button className = {'login-button'} type="submit">Login</button>
                <a href="forgot-password"> Forgot Password?</a>
            </form>
        </div>
    
    );
}

export default login;