import React from 'react';
import './subtotal.css'
import CurrencyFormat from 'react-currency-format'
import { useStateValue } from './StateProvider';
import { getBasketTotal } from './reducer';


function Subtotal() {

    const [{ basket }, dispatch] = useStateValue();


    console.log(basket);

    return (
        <div className="subtotal">
            <div className="currencyformat">

                <CurrencyFormat
                    renderText={(value) => (
                        <>
                            <p className="price">Subtotal (0 Items) : <strong>{value}</strong></p>
                            <small ><input className="checkbox" type="checkbox" />This order contains a Gift</small>
                        </>
                    )}
                    decimalScale={2}
                    value={getBasketTotal(basket)}
                    displayType={"text"}
                    thousandSeperator={true}
                    prefix={"$"}
                />
            </div>
            <button className="checkoutbutton">Proceed to Checkout</button>
        </div>
    )
}

export default Subtotal
