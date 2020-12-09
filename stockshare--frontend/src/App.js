
import Nav from './component/Nav';
import Login from './component/Login';

import Image from './component/Image';
import Home from './component/Home';
import Signup from './component/Signup';
import Shop from './component/Shop';
import Course from './component/Course';


import{BrowserRouter as Router, Route,Link,NavLink, Switch} from 'react-router-dom';
import './App.css';




function App() {
  return (

    <Router>
    <div class = "App">
    <center>
    <h1> STOCKSHARE</h1>
    </center>
      <nav>
        <ul>
        <li>
            <Link exact to="/">Home</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/shop">Shop</Link>
          </li>
          <li>
            <Link to="/signup">Signup</Link>
          </li>
          <li>
          <Link to="/course">Course</Link>
        </li>
          
        </ul>
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

    
export default App;

