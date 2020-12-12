import React, { Component } from 'react';
import Nav from './component/Nav';
import Login from './component/Login';


import Home from './component/Home';
import Signup from './component/Signup';
import Shop from './component/Shop';
import Course from './component/Course';


import{BrowserRouter as Router, Route,Link,NavLink, Switch} from 'react-router-dom';
import './App.css';


class App extends Component {

  render() {
  
  return (

    <Router>
    <div class = "App">
 
      <nav>
 
            
            <Link exact to="/">Home</Link>
            <div className = "divider"/>
            
          
            <Link to="/login">Login</Link>
            <div className = "divider"/>
            <Link to="/shop">Shop</Link>
            <div className = "divider"/>
            <Link to="/signup">Signup</Link>
            <div className = "divider"/>
          <Link to="/course">Course</Link>
          
        
      </nav>
      <Switch>
      <Route exact path="/">
        <Home />
       
        </Route>
      <Route path="/login">
        <Nav />
      </Route>
      <Route path="/signup">
        <Signup/>
      </Route>
      <Route path="/shop">
        <Shop/>
      </Route>
      <Route path="/course">
        <Course/>
      </Route>
      
      
    </Switch>
  
    
  </div>
</Router>
);
}

    
}

export default App;