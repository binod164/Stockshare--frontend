import React, { Component } from 'react'

export class Stocks extends Component {
    render() {
        const { id, name, image, symbol} = this.props.stock
        return (
            <div className = "Stock-card">
              
             <img className= "Stock-image" img src = {image} /> <br />
             Stock: {name} <br />
             Symbol: {symbol} <br />
             </div>
            
        )
    }
}

export default Stocks
