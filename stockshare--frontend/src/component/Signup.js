import React from 'react'

function Signup() {
    return (
        <center>
        <div class = "signup">
        
        <form action="/action_page.php" class="form-container">
        <label for="fullname"><b>First Name</b></label>
        <input type="text" placeholder="Enter your full name" name="fullname" required /><br></br>
        
        <label for="email"><b>Email</b></label>
        <input type="email" placeholder="Enter Email" name="email" required /><br></br>
    
        <label for="psw"><b>Password</b></label>
        <input type="password" placeholder="Enter Password" name="psw" required /><br></br>

        <label for="psw"><b>Confirm Password</b></label>
        <input type="password" placeholder="Confirm Password" name="psw" required /><br></br>
    
       
        <button type="submit" class="btn">Signup</button>
       
        
        </form>
        
        </div>
        </center>
    )
}

export default Signup





