import React from 'react'
import './checkoutproduct.css'
import { useStateValue } from './StateProvider';



function Checkoutproduct({ id, price, title, image, rating }) {
    const [{ basket }, dispatch] = useStateValue();


    const removeFromBasket = () => {
        dispatch({
            type: "remove_from_basket",
            id: id,
        })
    }

    return (
        <div className="checkoutproduct">
            <img src={image} alt="" />
            <div className="checkoutproductinfo">
                <p>{title}</p>
                <p><small>$</small>
                    <strong>{price}</strong></p>
                <div className="checkoutproductrating">
                    {Array(rating).fill().map((_, i) =>
                        <span>&#11088;</span>
                    )}
                </div>
                <button onClick={removeFromBasket}>Remove from Cart</button>
            </div>
        </div>
    )
}

export default Checkoutproduct
