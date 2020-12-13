// use local storage to get id of the specific user , and use fetch method to get the information of the user that is logged in
// initialize class component with user in the state

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

            <div className="d-flex flex-column justify-content-center m-3 profile">
                <div className="card">
                    <img  className = "profile-image" src={image} />
                    <div class="card-body">
                        <h5 class="card-title">Username: {username}</h5>
                        <h5 class="card-title">Email: {email}</h5>
                        <p>Bio: {bio}</p>
                    </div>
                </div>
            </div>
        )
    }
}