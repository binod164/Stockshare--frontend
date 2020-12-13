// Use fetch method to retrieve data/stocks from the back end and post in the webpage
// start with a class component and put stocks in the state as an empty array

import React, { Component } from 'react'
import StockList from './StockList'
import About from './About'
import StockDetail from './StockDetail'


export class HomePage extends Component {

    state = {
        stocks: []
    }

    componentDidMount(){
        document.body.style.backgroundColor = "black";
        fetch('http://localhost:3000/stocks')
        .then(resp => resp.json())
        .then(stocks => {
            this.setState({stocks})
        })
    }
    render() {
        return (
            <div className = "home-page">
                <About />
                    <StockList className = "home-page" stocks = {this.state.stocks}  history = {this.props.history}/>
            </div>
        )
    }
}

export default HomePage
