import React from 'react';
import icon from '../../../assets/loginIcon.png'
function login() {
    return (
       
        <div>
            <img src = {icon} alt = ""/>
            <form>
                <h3>Username</h3>
                <input type="text" title="username" placeholder="username" />
                <h3>Password</h3>
                <input type="password" title="username" placeholder="password" />
                <button type="submit">Login</button>
                <a href="forgot-password"> Forgot Password?</a>
            </form>
        </div>
    
    );
}

export default login;