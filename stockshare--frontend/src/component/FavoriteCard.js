import React, { Component } from 'react'

export class FavoriteCard extends Component {
    render() {
        console.log("stocks", this.props.stock.name)
        const {name, image, symbol}  = this.props.stock
        return (
            <div className = "Stock-card">
                
             <div> <img  className = "Stock-image" src = {image} /> </div>
                Stock: {name} <br />
            
                {/* <button onClick = {(e) => this.props.deleteHandler(e, this.props.stock.id)}> Delete </button>  */}
        
            </div>
        )
    }
}

export default FavoriteCard
