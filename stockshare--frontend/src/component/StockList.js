// Use functional component
// stocks is passed down as props from the home page to the stocklist then to the stocks
// Use map to iterate through all the stocks 

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
