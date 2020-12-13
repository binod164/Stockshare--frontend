import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Link, NavLink } from 'react-router-dom'

const NavBar = () => {

  return (
    <div className="home1">
      <Link to="/" style={{ marginRight: 210, color: "white", marginTop: 12 }}>Home</Link>
      <div className="divider" />


      <Link to="/shop" style={{ marginRight: 210, color: "white", marginTop: 12 }}>Shop</Link>
      {/* <div className = "divider"/>
            <Link to="/signup" style = {{marginRight: 210, color: "white", marginTop:12 }}>Signup</Link> */}
      <div className="divider" />
      <Link to="/course" style={{ marginRight: 210, color: "white", marginTop: 12 }}>Course</Link>
      <div className="divider" />
      <Link to="/profile" style={{ marginRight: 210, color: "white", marginTop: 12 }}>Profile</Link>
      <div className="divider" />
      <Link to="/my-favorite" style={{ marginRight: 210, color: "white", marginTop: 12 }}>Favorites</Link>
      <Link to="/login" style={{ marginRight: 210, color: "white", marginTop: 12 }}>Login</Link>
      <div className="divider" />

    </div>
  )
}


export default NavBar
