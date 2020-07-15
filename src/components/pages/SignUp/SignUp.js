import React from 'react';
import icon from '../../../assets/LoginIcon.png'
import Aux from '../../../hoc/Aux';
function signUp() {
    return (
        <Aux>
            <img className = {'centered'}src = {icon} alt = ""/>
                <div>
                    <form className = {'login'}>
                        <input className = {'login-input'} type="text" title="name" placeholder="Name"/>
                        <input className = {'login-input'} type="text" title="username" placeholder="Username" />
                        <input className = {'login-input'} type="password" title="password" placeholder="Password" />
                        <input className = {'login-input'} type="password" title="reenterpass" placeholder="Re-enter Password"/>
                        <button className = {'login-button'}type="submit">Register</button>
                    </form>
                </div>     
        </Aux>
        
    );
}

export default signUp;