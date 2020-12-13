import React, { Component } from 'react'
import {Carousel} from "react-bootstrap"
import "bootstrap/dist/css/bootstrap.min.css";


export class Home extends Component {
    render() {
        return (
            <div>
                <Carousel className="about-image" interval ={3000} keyboard = {false} pause = {false} infiniteLoop useKeyboardArrows autoPlay>
                    
                    <Carousel.Item>
                        <center>
                            <img className="about" src="https://cdn.aarp.net/content/dam/aarp/money/investing/2020/01/1140-bull-and-bear-illustration-with-stock-chart.jpg" />

                    <div className="about-stock2">    <div className="divider2" /> STOCKSHARE</div>
                    <div className="about-stock">The mission of Stockshare is to help traders learn the basic of stock trading as well as guide them to strengthen their portfolio.</div></center>
                <div className="about-stock1">        <div className="divider1" /> "TOGETHER WE BUILD."</div>
                </Carousel.Item>
                              <Carousel.Item>
                                <img className = "about"
                                src="https://www.irishtimes.com/polopoly_fs/1.3344131.1515006653!/image/image.jpg_gen/derivatives/box_620_330/image.jpg"
                                  
                                />
                              </Carousel.Item>
                              <Carousel.Item>
                                <img
                                  className = "about"
                                  src="https://investadvocate.com.ng/wp-content/uploads/2018/04/Stocks.jpg"
                                />
                              </Carousel.Item>
                              <Carousel.Item>
                                <img
                                  className = "about"
                                  src="https://www.bankrate.com/2019/01/25123256/How-to-buy-stocks.jpg"
                                  
                                />
                              </Carousel.Item>
                </Carousel>
            </div>
        )
    }
}



export default Home;
