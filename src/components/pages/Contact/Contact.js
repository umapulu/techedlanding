import React from 'react';
import '../../pages/Pages.css';

function contact() {
    return (
        <div className = 'purple'>
            <div className = 'title'>
                <h1>Contact Us</h1>
                <p> We'd love to hear from you.</p>
                <p>Get in touch with us.</p>  
            </div>
            
            <div>
                <form>   
                    <div>          
                        <input className = {'contact-input1'} type="text" title="username" placeholder="Name" />
                        <input className = {'contact-input1'}  type="number" title="phone" placeholder="Phone" />
                    </div>
                    <div>
                        <input className = {'contact-input2'}  type="email" title="email" placeholder="Email" />
                    </div>
                    <div>
                        <textarea className = {'contact-input3'}  type="text" title="contacttext" placeholder="Click to Type" />
                    </div>
                    <div>
                        <button className = {'button'} type="submit">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default contact;