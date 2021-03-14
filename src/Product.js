import React from 'react'
import './product.css'
import { useStateValue } from './StateProvider';

function Product({ id, title, image, rating, price }) {
    const [state, dispatch] = useStateValue();

    const addToBasket = () => {
        dispatch({
            type: "add_to_basket",
            item: {
                id: id,
                rating: rating,
                price: price,
                image: image,
                title: title
            }
        })
    }

    return (
        <div className="product">
            <div className="productinfo">
                <p className="title">{title}</p>
                <p className="price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>

                <div className="productrating">
                    {Array(rating).fill().map((_, i) =>

                        <span>&#11088;</span>
                    )}
                </div>
            </div>
            <img src={image} alt="" />
            <button onClick={addToBasket}>Add To Basket</button>


        </div>
    )
}

export default Product
