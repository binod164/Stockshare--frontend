import React from 'react'


// import { Navbar , Nav } from 'react-bootstrap';
import{BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import{Link, NavLink} from 'react-router-dom'

const NavBar = () => {
    
        return (
          <div>
            <Link exact to="/">Home</Link>
            <div className = "divider"/>
            
          
            <Link to="/login">Login</Link>
            <div className = "divider"/>
            <Link to="/shop">Shop</Link>
            <div className = "divider"/>
            <Link to="/signup">Signup</Link>
            <div className = "divider"/>
          <Link to="/course">Course</Link>
          </div>
        )
    }


export default NavBar
