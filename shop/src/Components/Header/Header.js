import React, { useState } from "react"
import './Header.css'
import MainShopLogo from "../../images/mainShop-logo.png"
import cartLogo from "../../images/cart-logo.png"
import { Link } from "react-router-dom"
import { useStateValue } from "../../StateProvider"
import SmallCart from "../SmallCart/SmallCart"

export default function Header() {
  const [{ choosenCategory, cart, userOrder }, dispatch] = useStateValue()
  const [cartDropDown, setCartDropDown] = useState(false)

  function getCurrency(event) {
    dispatch({
      type: 'CHANGE_CURRENCY',
      currency: event.target.value
    })
  }
  function changeCategory(event) {
    dispatch({
      type: 'CHANGE_CATEGORY',
      category: event.target.value
    })
  }

  return (
    <nav
      className="headerComponent-container">
      <div onClick={() => setCartDropDown(false)}
        className="nav-button_group">
        <Link to='/'>
          <button onClick={changeCategory} value='all' className="women-button">ALL</button>
          <button onClick={changeCategory} value='clothes' className="men-button">CLOTHES</button>
          <button onClick={changeCategory} value='tech' className="kids-button">TECH</button>
        </Link>
      </div>
      <a onClick={() => setCartDropDown(false)}
        className="mainShop-button">
        <Link to='/'>
          <img className="mainShop-logo" src={MainShopLogo} />
        </Link>
      </a>
      <div className="cart-button_group">
        <select onChange={getCurrency} className="currency-button">
          <option value='$'>$</option>
          <option value='£'>£</option>
          <option value='A$'>A$</option>
          <option value='¥'>¥</option>
          <option value='₽'>₽</option>
        </select>
        <a onClick={() => cartDropDown ?
          setCartDropDown(false) :
          setCartDropDown(true)}
          className="cart-button">
          <img className="cart-logo" src={cartLogo} />
          <div
            className="header__cartCounter">{cart.length}</div>
        </a>
        {cartDropDown ?
          <div
            onClick={() => cartDropDown ?
              setCartDropDown(false) :
              setCartDropDown(true)}
            className="smallCart__componentBackground">
          </div> :
          null}
        {cartDropDown ?
          <SmallCart
            cartDropDown={cartDropDown}
            setCartDropDown={setCartDropDown}
          /> :
          null}
      </div>
    </nav>
  )
}