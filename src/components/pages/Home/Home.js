import React from 'react';
import Aux from '../../../hoc/Aux';
import '../Pages.css';
import universities from '../../../assets/Universities.png';

function home() {
    return (
    <div className = {'purple'}>
    <div className = {'adjacent-list'}>
        <div className = {'adjacent'}> 
            <h1>
                Learn tech faster with 
                personalized, practical 
                courses
            </h1>
            <p>
                Through our unique, personalized 
                computer science courses, 
                we provide the best possible 
                platform to learn 
            </p>
            <a href = "contact" className = {'button'}> Schedule your free consultation</a>
        </div>
         <img className = {'adjacent'} src = "/logo192.png" alt = ""/> 
    </div>
    <div>
        <div className = {'adjacent'}>
            <h1>
            Practical Content
            </h1>
            <p>
            We firmly believe in quality 
            over quantity. Our in-depth 
            courses, paired with attention 
            from specialized tutors, allows 
            for a deep understanding of the 
            course content.
            </p>
        </div>
        <img className = {'adjacent'} src = "/logo192.png" alt = ""/> 
    </div>
    <div>
        <img className = {'adjacent'} src = "/logo192.png" alt = ""/> 
        <div className = {'adjacent'}>
            <h1>
            Personalized Lessons
            </h1>
            <p>
            We firmly believe in quality 
            over quantity. Our in-depth 
            courses, paired with attention 
            from specialized tutors, allows 
            for a deep understanding of the 
            course content.
            </p>
        </div>
    </div>
    <div>
        <div className = {'adjacent'}>
            <h1>
            Collaborative Learning
            </h1>
            <p>
            We firmly believe in quality 
            over quantity. Our in-depth 
            courses, paired with attention 
            from specialized tutors, allows 
            for a deep understanding of the 
            course content.
            </p>
        </div>
        <img className = {'adjacent'} src = "/logo192.png" alt = ""/> 
    </div>
    
    
        <h1>How to get started</h1>
        <p>
            Here’s a quick breakdown on how to 
            get started on your path to 
            computer science mastery with TechEd
        </p>
    <div>
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
        <div className = {'adjacent3list'}>
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
   
    <div className = {'green-outline'}>
        <h3>
            Want a free consultation?
        </h3>
        <a href = "contact" className = {'button'}>
            Schedule
        </a>
    </div>
    <h1>
        What people are saying about TechEd
    </h1>
    <caption>
        names, position, quote and logo here
    </caption>
    <h1>
        Teachers from leading and prominent world organizations
    </h1>
    <img src = {universities} alt = ""/>

      
    </div>
        
    );
}

export default home;