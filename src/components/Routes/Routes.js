import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Home from '../pages/Home/Home';
import About from '../pages/About/About';
import Pricing from '../pages/Pricing/Pricing';
import OurDifference from '../pages/OurDifference/OurDifference';
import Contact from '../pages/Contact/Contact';
import Login from '../pages/Login/Login';
import SignUp from '../pages/SignUp/SignUp';
import FAQ from '../pages/FAQ/FAQ';
import Terms from '../pages/Terms/Terms';
import Careers from '../pages/Careers/Careers';
import ForgotPassword from '../pages/ForgotPassword/ForgotPassword';

const routes = () => {
    return (
    
        <Switch>
            <Route path = '/about' component = {About}/>
            <Route path = '/pricing' component = {Pricing}/>
            <Route path = '/our-difference' component = {OurDifference}/> 
            <Route path = '/contact' component = {Contact}/>
            <Route path = '/login' component = {Login}/>
            <Route path = '/sign-Up' component = {SignUp}/>
            <Route path = '/FAQ/' component = {FAQ}/>
            <Route path = '/terms' component = {Terms}/>
            <Route path = '/careers' component = {Careers}/>
            <Route path = '/forgot-password' component = {ForgotPassword}/>
            <Route path = '/' component = {Home}/>
        </Switch>
    
    );
}
export default routes;
