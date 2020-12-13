import React, { Component } from 'react'
import Stocks from './Stocks';
import Profile from './Profile'
const StockAPI = "http://localhost:3000/stocks"

export class StockDetail extends Component {
    state = {
        stock: null,
        user: '',
        reviews: []
    }
    
    commentChange = ( event ) => {this.setState({
         [event.target.name]: event.target.value})
        }
       
     handledSubmit = (e) =>{
            e.preventDefault()
          
            let user_id = localStorage.getItem("user_id")
            let id = this.props.match.params.id
            // debugger
            fetch('http://localhost:3000/reviews',{
                method:'POST',
                headers:{
                    'Content-Type':'application/json',
                    'Accept':'application/json'
            },
            body: JSON.stringify({
                user_id: user_id,
                stock_id: id,
                comment: this.state.comment,

            })
        })
        .then(resp =>resp.json())

        .then(review => this.setState({reviews: [...this.state.reviews,review]}))
       
        .then(this.setState({
               
                comment:''
             }))
        }
        
        
        componentDidMount() {
       
            let id = this.props.match.params.id
            fetch(`${StockAPI}/${id}`)
            .then(resp => resp.json())
            .then(stock => {
                this.setState({stock})
                this.setState({reviews: stock.reviews})
    
        })
         
    }
                
            
        
    renderStock = () => {
        const {name, image, symbol} = this.state.stock
        return (
            <div>
              <div><img className = "detailed-image" src={image} /></div>  
              <div>Name: {name}</div>  
              <div>Symbol: {symbol}</div>  
            
            
            Post comment: <input onChange = {this.commentChange} name = "comment" value = {this.state.comment} Placeholder = "Enter post here"/>
            <button onClick = {this.handledSubmit} >Submit</button>
             <div>Posts: </div> {this.state.user.name}
             {this.state.reviews.map(review => <div>{review.comment} </div>)}



            </div>
        )
    }

    render(){
        return(
           this.state.stock ? this.renderStock() : <div> No Stock Selected</div>
        )
    }
}

