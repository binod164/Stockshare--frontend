import React, { Component } from 'react'
import FavoriteCard from './FavoriteCard'
const StockURL = "http://localhost:3000/stocks"
const headers = {
    "Content-Type": "application/json",
    Accept: "application/json",
  };

export default class Favorite extends Component {
   
    state = {
        myFavs: []

    }
    componentDidMount() {
        document.body.style.backgroundColor = "black"
        let userId = localStorage.getItem("user_id");
    //    console.log("lado",this.state.myFavs)
    // debugger
        fetch(`http://localhost:3000/users/${userId}/add_stock`)
            .then(resp => resp.json())
            .then(data => this.setState({
                myFavs: data
            }))
    }

    deleteHandler = (e, stock_id) => {
        e.preventDefault()
         
        fetch(`http://localhost:3000/stocks/${stock_id}`, {
        method: "DELETE",
        headers: {
            "content-type": "application/json",
            accepts: "application/json"
        },
        body: JSON.stringify({
            stock_id: stock_id
        })
    })
        .then(resp => resp.json())
        .then(resp => {
            function filterFunction(stock) {
                return (stock.id != stock_id);
            }
            let filteredStocks = this.state.myFavs.filter(filterFunction);
            this.setState({
                myFavs: filteredStocks
            })
        })
    }
   
    render() {
   
        // console.log('mujiiii',this.state)
        return (
            <div>
                {this.state.myFavs.map((stock) => <FavoriteCard stock = {stock}  />
                   
                )}
            </div>
        )
    }
}