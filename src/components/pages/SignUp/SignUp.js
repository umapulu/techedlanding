import React from 'react';
import icon from '../../../assets/LoginIcon.png'

function signUp() {
    return (
        <div>
            <div>
            <img src = {icon} alt = ""/>
            <form>
                <h3>Username</h3>
                <input type="text" title="username" placeholder="username" />
                <h3>Password</h3>
                <input type="password" title="username" placeholder="password" />
                <input type="password" title="username" placeholder="re-enter password"/>
                <button type="submit">Register</button>
            </form>
            </div>
        </div>
    );
}

export default signUp;