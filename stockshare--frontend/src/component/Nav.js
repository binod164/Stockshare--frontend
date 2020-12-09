import React from 'react'

function Nav() {
    return (
        <div class = "post">
        <form action="/action_page.php" class="form-container">

        <label for="stockname"><b>Enter stockname</b></label>
        <input type="text" placeholder="Stock name or symbol" name="stockname" required />
        
        <label for="post"><b>Post</b></label>
        <input type="text" placeholder="Enter Post" name="post" required />
    
        
        <button type="submit" class="btn">Post</button>
        </form>
        
        </div>
    )
}

export default Nav;
