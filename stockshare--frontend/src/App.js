import React, { Component } from 'react';
import Nav from './component/Nav';
import NavBar from './component/NavBar';


import Home from './component/About';
import Signup from './component/Signup';
import Shop from './component/Shop';
import Course from './component/Course';


import{BrowserRouter as Router, Route,Link,NavLink, Switch} from 'react-router-dom';
import './App.css';
import HomePage from './component/HomePage';


class App extends Component {

  render() {
  
  return (

    <div>
      <NavBar/>
  
      <Switch>
      
        <Route path="/login" component = {Nav} />
      
        <Route path="/signup" component = {Signup} />
        
        <Route path="/shop" component = {Shop} />
        
        <Route path="/course" component = {Course} />
  
        <Route exact path="/" component = {HomePage} />
      
       </Switch>
  
    
  </div>

);
}

    
}

export default App;