import React, { Component } from 'react'

export class Nav extends Component {
    render() {
        return (
            <div class = "post">
        <form action="/action_page.php" class="form-container">

        <label for="email"><b>Enter email</b></label>
        <input type="email" placeholder="Enter Email" name="email" required />
        
        <label for="psw"><b>Password</b></label>
        <input type="text" placeholder="Enter Password" name="psw" required />
    
        
        <button type="submit" class="btn">Login</button>
        <center>
        <img className = "about" src ="https://www.gannett-cdn.com/-mm-/3b8b0abcb585d9841e5193c3d072eed1e5ce62bc/c=0-30-580-356/local/-/media/2018/09/11/USATODAY/usatsports/getty-stock-market-rising_large.jpg?auto=webp&format=pjpg&width=1200" />
       
        </center> </form>
        
        </div>
        )
    }
}

export default Nav
