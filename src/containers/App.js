import React from 'react';
import './App.css';
import HeaderRouteManager from '../components/navigation/header/HeaderRouteManager';
import FooterRouteManager from '../components/navigation/footer/FooterRouteManager';
import Routes from '../components/Routes/Routes';
import {BrowserRouter as Router} from 'react-router-dom';

function App() {


  return (
    <div className="App">
    <Router>
        <HeaderRouteManager/>
         <Routes/>
        <FooterRouteManager/>
     </Router> 
    </div>
  );
}

export default App;
