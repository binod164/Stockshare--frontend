
// create a class component and put the email and password as a state, since state changes with new user
// implement event handler onSubmit on the form  and trigger it with a helper function, so that when the user logs in with correct email and password, it redirects the user to homepage through react router
// if the user is new, the signup page should be loaded if signup button is clicked

import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Form } from 'react-bootstrap'

export class Login extends Component {
    state = {
        email: '',
        password: ''
    }


    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value })

    }


    submitHandler = (e) => {
        e.preventDefault()
        fetch("http://localhost:3000/sessions", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify({
                password: this.state.password,
                email: this.state.email
            })
        })
            .then(resp => resp.json())
            .then(resp => {
                if (resp.errors) {
                    console.log("erorr")
                }
                else {
                    localStorage.setItem("user_id", resp.id);

                    this.props.history.push("/");
                }

            })


    }
    render() {
        return (
            <div className="about-image">
                <img className="about" src="https://www.gannett-cdn.com/-mm-/3b8b0abcb585d9841e5193c3d072eed1e5ce62bc/c=0-30-580-356/local/-/media/2018/09/11/USATODAY/usatsports/getty-stock-market-rising_large.jpg?auto=webp&format=pjpg&width=1200" />
                <div className="login-input" >
                    <form onSubmit={this.submitHandler}>
                        <Form.Group controlId="formGroupEmail">
                            <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" name="email" value={this.state.email} onChange={this.handleChange} required />
                        </Form.Group>
                        <Form.Group controlId="formGroupPassword">
                            <Form.Label>Password</Form.Label>
                             <Form.Control type="password" placeholder="Password" name="password" value={this.state.password} onChange={this.handleChange} required />
                        </Form.Group>

                        <div className="login-button">
                            <button type="submit" className="btn">Login</button> <br />

                            <Link className="signup-button mt-2" to="/signup">Sign Up</Link>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}
export default Login
