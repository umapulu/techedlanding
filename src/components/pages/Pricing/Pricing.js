import React from 'react';
import Aux from '../../../hoc/Aux';
import '../Pages.css';
function pricing() {
    return (
    <Aux>
        <div>
            <div className = {'adjacent'} >
                <h1>Pricing Suited to your needs </h1>
                <p>We offer a variety of pricing options for your 
                    needs at an affordable point. Choose from our
                    plans which are all billed on a monthly basis.
                </p>
                <button>Schedule your free consultation</button>
            </div>
            <img className = {'adjacent'} src = "/logo192.png" alt = ""/>
        </div>
        <div className = {'adjacent3list'}>
            <div className = {'adjacent3'}>
                <img src = "/logo192.png" alt = ""/>
                <h1>Group</h1>
                <h3>$210/month</h3>
                <p>3:1 student to teacher ratio
                    Four 1-hour group sessions
                    Two 1-hour collaborative sessions
                </p>
            </div>
            <div className = {'adjacent3'}>
                <img src = "/logo192.png" alt = ""/>
                <h1>Individual</h1>
                <h3>$310/month</h3>
                <p> 1:1 student to teacher ratio
                    Four private 1-hour sessions
                    Two 1-hour collaborative sessions
                </p>
            </div>
            <div className = {'adjacent3'}>
                <img src = "/logo192.png" alt = ""/>
                <h1>Customized</h1>
                <h3>Flexible</h3>
                <p>Schedule your free consultation 
                    and work with our team to 
                    create a plan which works for you
                </p>
            </div>
        </div>
        <div>
            <div>
                <h1>Summer 2020 Bootcamps</h1>
                <ul>
                    <li>Flexible scheduling and rescheduling process</li>
                    <li>Dedicated instructor to guide and advise you</li>
                    <li>Personalized progress and session reports shared</li>
                    <li>Project-based learning, personalized per student</li>
                </ul>
            </div>
            <div>
                <h1>Across all our plans</h1>
                <ul>
                    <li>Flexible scheduling and rescheduling process</li>
                    <li>Dedicated instructor to guide and advise you</li>
                    <li>Personalized progress and session reports shared</li>
                    <li>Project-based learning, personalized per student</li>
                </ul>
                <img src = "/logo192.png" alt = ""/>
            </div>
        </div> 
        
            <h1>How to get started</h1>
            <p>
                Here’s a quick breakdown on how to 
                get started on your path to 
                computer science mastery with TechEd
            </p>
        <div >
            <div className = {'adjacent3list'}>
                <h1 className = {'adjacent3'}> 1 </h1>
                <div className = {'adjacent3'}>
                    <h1>Schedule your call</h1>
                    <p>Schedule your free consultation 
                        with one of our specialists by 
                        following the link at the bottom </p>
                </div>  
                <img className = {'adjacent3'} src = "/logo192.png" alt = ""/>
            </div>
            <div  className = {'adjacent3list'}>
                <h1 className = {'adjacent3'}> 2 </h1>
                <div className = {'adjacent3'}>
                <h1>Customize your experience</h1>
                    <p>Choose from one of the above
                    pricing models and select
                    your area of study from one 
                    of our tutoring paths</p>
                </div>  
                <img className = {'adjacent3'} src = "/logo192.png" alt = ""/>
            </div>
            <div className = {'adjacent3list'}>
                <h1 className = {'adjacent3'}> 3 </h1>
                <div className = {'adjacent3'}>
                    <h1>Start Learning</h1>
                    <p>Talk with your assigned tutor and 
                        begin learning using our carefully 
                        curated content
                    </p>
                </div>  
                <img className = {'adjacent3'} src = "/logo192.png" alt = ""/>
            </div>
        </div>
        <button className = {'button'}>Schedule your free consultation</button>
    </Aux>   
    );
}

export default pricing;