
import React, { Component } from "react";
import { Form, Button } from "react-bootstrap";
const headers = {
  "Content-Type": "application/json",
  Accept: "application/json",
};

export default class SignUp extends Component {
  state = {
    name: "",
    email: "",
    password: "",
  };

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  SignUp = (event) => {
    event.preventDefault();
    fetch("http://localhost:3000/users", {
      method: "POST",
      headers: headers,
      body: JSON.stringify({
        name: this.state.name,
        password: this.state.password,
        email: this.state.email
      }),
    })
      .then((resp) => resp.json())
      .then((resp) => this.props.history.push("/login"));
  };

  render() {
    const { name, username, email, password, image,bio } = this.state;
    return (
      <div className = "signup">
        <form onSubmit={this.SignUp}>
          <div className="d-flex flex-column col-md-4 offset-md-4">
            <div className="form-group">
              <label for="inputdefault">Name</label>
              <input
                className="form-control"
                id="inputdefault"
                name="name"
                type="text"
                placeholder="Name"
                value={name}
                onChange={this.handleChange}
              />
            </div>

          
            <div className="form-group">
              <label for="inputdefault">Email</label>
              <input
                className="form-control"
                id="inputdefault"
                name="email"
                type="text"
                placeholder="Email"
                value={email}
                onChange={this.handleChange}
              />
            </div>

            <div className="form-group">
              <label for="inputdefault">Bio</label>
              <input
                className="form-control"
                id="inputdefault"
                name="bio"
                type="text"
                placeholder="Bio"
                value={bio}
                onChange={this.handleChange}
              />
            </div>

            <div className="form-group">
              <label for="inputdefault">Image</label>
              <input
                className="form-control"
                id="inputdefault"
                name="image"
                type="text"
                placeholder="Enter URL"
                src={image}
                onChange={this.handleChange}
              />
            </div>

            <div className="form-group">
              <label for="inputdefault">Username</label>
              <input
                className="form-control"
                id="inputdefault"
                name="username"
                type="text"
                placeholder="username"
                value={username}
                onChange={this.handleChange}
              />
            </div>

            <div className="form-group">
              <label for="inputdefault">Password</label>
              <input
                className="form-control"
                id="inputdefault"
                name="password"
                type="password"
                placeholder="Password"
                value={password}
                onChange={this.handleChange}
              />
            </div>
            <Button variant="primary" className="text-dark" type="submit">
              Submit
            </Button>
          </div>
        </form>
        
      </div>
    );
  }
}



