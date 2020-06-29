import React from 'react';
import '../Pages.css';

function about() {
    return (
        <div>           
                
                <h1>
                Our Story
                </h1>
                <div>
                Lorem ipsum dolor sit amet, 
                consectetur adipiscing elit,
                sed do eiusmod tempor incididunt 
                ut labore et dolore  magna aliqua. 
                Ut enim ad minim veniam, quis nostrud
                exercitation ullamco laboris nisi ut 
                aliquip ex ea commodo  consequat. 
                Duis aute irure dolor in reprehenderit
                in voluptate velit esse cillum dolore 
                eu fugiat nulla pariatur.
                </div>
                <div>
                <h1>Meet the TechEd team</h1>
                <div className = {'adjacent'}>
                    <div className = {'adjacent'}>
                        <img src = "/logo192.png" alt = ""/>
                        <h2>Nishant Jain </h2>
                        <h3>Co-founder & CFO</h3>
                        Lorem ipsum dolor sit amet, 
                        consectetur adipiscing elit, 
                        sed do eiusmod tempor 
                        incididunt ut labore et dolore
                        magna aliqua. Ut enim ad 
                        minim veniam, quis nostrud 
                        exercitation ullamco    
                    </div>
                    <div className = {'adjacent'}>
                        <img src = "/logo192.png" alt = ""/>  
                        <h2> Sauren Gupta</h2> 
                        <h3>Co-founder & CEO</h3>
                        Lorem ipsum dolor sit amet, 
                        consectetur adipiscing elit, 
                        sed do eiusmod tempor 
                        incididunt ut labore et dolore
                        magna aliqua. Ut enim ad 
                        minim veniam, quis nostrud 
                        exercitation ullamco    
                    </div>
                </div>
                <div className = {'adjacent'}>
                    <div className = {'adjacent'}>
                        <img src = "/logo192.png" alt = ""/>
                        <h2>Vishal Dubey </h2>
                        <h3>Co-founder & CTO</h3>
                        Lorem ipsum dolor sit amet, 
                        consectetur adipiscing elit, 
                        sed do eiusmod tempor 
                        incididunt ut labore et dolore
                        magna aliqua. Ut enim ad 
                        minim veniam, quis nostrud 
                        exercitation ullamco    
                    </div>
                    <div className = {'adjacent'}>
                    <img src = "/logo192.png" alt = ""/>
                        <h2>Ani Bala </h2>
                        <h3>Co-founder & COO</h3>
                        Lorem ipsum dolor sit amet, 
                        consectetur adipiscing elit, 
                        sed do eiusmod tempor 
                        incididunt ut labore et dolore
                        magna aliqua. Ut enim ad 
                        minim veniam, quis nostrud 
                        exercitation ullamco    
                    </div>
                </div>
            </div>
        </div>
    );
}

export default about;