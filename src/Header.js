import React from 'react'
import './header.css'
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import { Link } from 'react-router-dom'
import { useStateValue } from './StateProvider'

function Header() {

    const [{ basket }, dispatch] = useStateValue()



    return (
        <div className="header">
            <Link to='/'>
                <img src="https://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="" />
            </Link>
            <div className="headermid">
                <input type="text" />
                <SearchIcon className="searchicon" />
            </div>
            <div className="headerright">
                <div className="headeroption">
                    <Link to='login'>
                        <div className="optionlineone">Hello Guest</div>
                        <div className="optionlinetwo">Sign in</div>

                    </Link>
                </div>
                <div className="headeroption">
                    <div className="optionlineone">Returns</div>
                    <div className="optionlinetwo">& orders</div>
                </div>
                <div className="headeroption">
                    <div className="optionlineone">Your</div>
                    <div className="optionlinetwo">Prime</div>
                </div>
                <Link to='/checkout'>
                    <div className="shoppingicon">
                        <ShoppingBasketIcon />
                        <span className="cartsize">{basket?.length}</span>
                    </div>
                </Link>
            </div>

        </div>
    )
}

export default Header
