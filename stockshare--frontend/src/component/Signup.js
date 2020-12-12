import React from 'react'

function Signup() {
    return (
       
        <div class = "signup">
        
        <form action="/action_page.php" class="form-container2">
        <label for="fullname"><b>First Name</b></label>
        <input type="text" placeholder="Enter your full name" name="fullname" required />
        
        <label for="email"><b>Email</b></label>
        <input type="email" placeholder="Enter Email" name="email" required />
    
        <label for="psw"><b>Password</b></label>
        <input type="password" placeholder="Enter Password" name="psw" required />

        <label for="psw"><b>Confirm Password</b></label>
        <input type="password" placeholder="Confirm Password" name="psw" required />
    
       
        <button type="submit" class="btn">Signup</button>
        <center>
        <img className = "about" src ="https://www.gannett-cdn.com/-mm-/3b8b0abcb585d9841e5193c3d072eed1e5ce62bc/c=0-30-580-356/local/-/media/2018/09/11/USATODAY/usatsports/getty-stock-market-rising_large.jpg?auto=webp&format=pjpg&width=1200" />
        </center>
        </form>
        
        </div>
       
    )
}

export default Signup





