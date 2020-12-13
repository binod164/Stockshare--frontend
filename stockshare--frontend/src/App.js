import React, { Component } from 'react';
import Login from './component/Login';
import NavBar from './component/NavBar';


import Home from './component/About';
import Signup from './component/Signup';
import Shop from './component/Shop';
import Course from './component/Course';
import Profile from './component/Profile';
import Favorite from './component/Favorite'
import FavoriteCard from './component/FavoriteCard'
import useHistory from 'react-router-dom';
import {createBrowseHistory} from "history";

import{BrowserRouter as Router, Route,Link,NavLink, Switch} from 'react-router-dom';
import './App.css';
import HomePage from './component/HomePage';
import { StockDetail } from './component/StockDetail';


class App extends Component {

  render() {
  
  return (

    <div className = "App">
      <NavBar/>

      <Switch>
        
        <Route path="/stocks/:id" component = {StockDetail} />
      
        <Route path="/login" component = {Login} />
      
        <Route path="/my-favorite" component = {Favorite} />
        
        <Route path="/signup" component = {Signup} />
        
        <Route path="/shop" component = {Shop} />
        


        <Route path="/profile" component = {Profile} />
        
        <Route path="/course" component = {Course} />
  
        <Route path="/" component = {HomePage} />
      
       </Switch>
  
    
  </div>

);
}

    
}

export default App;