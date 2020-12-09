import React from 'react'

function Login() {
    return (
        
        
        <center>
        <div class = "login">
        
        <form action="/action_page.php" class="form-container">
        
        <label for="email"><b>Email</b></label>
        <input type="text" placeholder="Enter Email" name="email" required />
    
        <label for="psw"><b>Password</b></label>
        <input type="password" placeholder="Enter Password" name="psw" required />
    
        <button type="submit" class="btn">Login</button>
        <button type="submit" class="btn">Signup</button>
       
        
        </form>
        
        </div>
        </center>
        
    
    )
}

export default Login
