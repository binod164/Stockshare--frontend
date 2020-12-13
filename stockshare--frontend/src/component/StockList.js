import React from 'react'
import Stocks from './Stocks'
import StockDetail from './StockDetail'

const StockList = (props) => {
    return (
        <div>
            {props.stocks.map(stock => <Stocks key = {stock.id} stock = {stock}  handleStock = {props.handleStock} history = {props.history}/>)}
            
        </div>
    )
}

export default StockList
