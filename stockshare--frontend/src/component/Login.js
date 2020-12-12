import React from 'react'

function Login() {
    return (
        
        
        <center>
        <div class = "login">
       
        <form action="/action_page.php" class="form-container1">
        
        <label for="email"><b>Email</b></label>
        <input type="text" placeholder="Enter Email" name="email" required />
    
        <label for="psw"><b>Password</b></label>
        <input type="password" placeholder="Enter Password" name="psw" required />
    
        <button type="submit" class="btn">Login</button>
        <button type="submit" class="btn">Signup</button>
       
        <img className = "about" src ="https://cdn.aarp.net/content/dam/aarp/money/investing/2020/01/1140-bull-and-bear-illustration-with-stock-chart.jpg" />
        </form>
        
        </div>
        </center>
        
    
    )
}

export default Login
