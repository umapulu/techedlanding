import React from 'react';
import icon from '../../../assets/LoginIcon.png'
import Aux from '../../../hoc/Aux';
function signUp() {
    return (
        <Aux>
            <div>
            <img className = {'centered'}src = {icon} alt = ""/>
                <div>
                    <form className = {'login'}>
                        <input className = {'login-input'} type="text" title="username" placeholder="name"/>
                        <input className = {'login-input'} type="text" title="username" placeholder="username" />
                        <input className = {'login-input'} type="password" title="username" placeholder="password" />
                        <input className = {'login-input'} type="password" title="username" placeholder="re-enter password"/>
                        <button className = {'login-button'}type="submit">Register</button>
                    </form>
                </div>
            </div>
        </Aux>
        
    );
}

export default signUp;