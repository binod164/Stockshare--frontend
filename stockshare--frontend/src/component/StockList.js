import React from 'react'
import Stocks from './Stocks'

const StockList = (props) => {
    return (
        <div>
            {props.stocks.map(stock => <Stocks key = {stock.id} stock = {stock} />)}
            
        </div>
    )
}

export default StockList
