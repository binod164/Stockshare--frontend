import React, { Component } from 'react'

export class Stocks extends Component {
    handleStock = (e) => {
        e.preventDefault();
        let user_id = localStorage.getItem("user_id");
        let stock_id = this.props.stock.id;

        fetch("http://localhost:3000/fav_stocks/",{
            method: "POST",
            headers: {
                "content-type": "application/json" ,
                accepts : "application/json",
            },
            body: JSON.stringify({
                user_id: user_id,
                stock_id: stock_id,
        }),

        })
        .then ((resp) => resp.json())
        .then((resp) => console.log(resp));
        };
    render() {
        const { id, name, image, symbol} = this.props.stock
        return (
            <div className = "Stock-card">
              
             <img className= "Stock-image" src={image} /> <br />
             Stock: {name} <br />
             Symbol: {symbol} <br />
             <button className = "stock-detail" onClick = {() => this.props.history.push(`/stocks/${id}`)}>Detail</button>
             <button className = "fav-button" onClick = {this.handleStock} > ♥️</button>
             </div>
            
        )
    }
}

export default Stocks
