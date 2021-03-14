import React from 'react'
import './home.css'
import Product from './Product'

function Home() {
    return (
        <div className="home">

            <img
                className="banner"
                src="https://images-eu.ssl-images-amazon.com/images/G/31/AmazonVideo/2021/X-site/Multititle/Feb/EN/1500x600_Hero-Tall_NP._CB657651956_.jpg" alt="" />
            <div className="homerow">

                <Product id='11' title="The monk who sold his ferrari" rating={5} price={222} image="https://images-na.ssl-images-amazon.com/images/I/91awIS46y7L.jpg" />
                <Product id='1' title="The  ferrari" rating={5} price={222} image="https://images-na.ssl-images-amazon.com/images/I/91awIS46y7L.jpg" />

            </div>
            <div className="homerow">
                <Product id='111' title="The monk who sold his ferrari" rating={5} price={222} image="https://images-na.ssl-images-amazon.com/images/I/91awIS46y7L.jpg" />
                <Product id='113' title="The monk who sold his ferrari" rating={5} price={222} image="https://images-na.ssl-images-amazon.com/images/I/91awIS46y7L.jpg" />
                <Product id='112' title="The monk who sold his ferrari" rating={5} price={222} image="https://images-na.ssl-images-amazon.com/images/I/91awIS46y7L.jpg" />


            </div>
            <div className="homerow">

                <Product id='101' title="The monk who sold his ferrari" rating={5} price={222} image="https://images-na.ssl-images-amazon.com/images/I/91awIS46y7L.jpg" />


            </div>


        </div>
    )
}

export default Home
