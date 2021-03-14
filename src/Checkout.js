import React from 'react'
import './checkout.css'
import Subtotal from './Subtotal'
import Checkoutproduct from './Checkoutproduct'
import { useStateValue } from './StateProvider';
import { getBasketTotal } from './reducer';



function Checkout() {

    const [{ basket }, dispatch] = useStateValue();

    return (
        <div className="checkoutpage">

            <div className="checkout">
                <div className="add">
                    <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img17/Pantry/Diwali19/Wave2/StoreFront/ApayCashback/1500x200.jpg" alt="" />
                </div>
                <div className="subtotal">
                    <Subtotal />
                </div>

            </div>
            {basket.map((item) =>
                <Checkoutproduct
                    id={item.id}
                    title={item.title}
                    rating={item.rating}
                    price={item.price}
                    image={item.image}
                />
            )}
        </div>
    )
}

export default Checkout
