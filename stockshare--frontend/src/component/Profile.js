import React, { Component } from "react";
import StockDetail from './StockDetail'
export default class Profile extends Component {
    state = {
        user: "",
    };

    componentDidMount() {
        let userId = localStorage.getItem("user_id");
        fetch(`http://localhost:3000/users/${userId}`)
            .then((response) => response.json())
            .then((profile) =>
                this.setState({
                    user: profile.user,
                })
            );
    }
    render() {
        const { name, email, username, bio, image } = this.state.user
        return (

            <div>
                <div>
                 <img  className = "profile-image" src={image} /> 
                 </div>
                <div> Name: {name}</div>
                <div>Username: {username}</div>
                <div>Email: {email}</div>
                <div>Bio: {bio}</div>

            </div>
        )
    }
}