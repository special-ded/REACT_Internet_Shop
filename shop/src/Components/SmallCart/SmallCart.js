import React from "react";
import { useStateValue } from "../../StateProvider";
import SmallCartItem from '../SmallCartItem/SmallCartItem'
import './SmallCart.css'
import { Link } from "react-router-dom";

export default function SmallCart({ cartDropDown, setCartDropDown }) {
  const [{ cart, choosenCurrensy }, dispatch] = useStateValue()
  //CALCULATION OF TOTAL QUANTITY OF GOODS
  let totalItemsQuantity = 0
  cart.map((item) => {
    totalItemsQuantity += item.Amount
  })

  //CALCULATION OF TOTAL QUANTITY OF GOODS
  let totalMoneyQuantity = 0
  cart.map((item) => {
    totalMoneyQuantity += item.Amount *
      item.price.find(({ currency }) => currency.symbol === choosenCurrensy).amount
  })
  return (
    <div className="smallCart__component">
      <div className="smallCart__componentInner">
        <div className="smallCart__componentProducts">
          <h1 className="smallCart__componentProductsH1"><span>May Bag</span>, {totalItemsQuantity} items</h1>
          {cart.map((product) =>
            < SmallCartItem
              key={product.id}
              product={product}
            />
          )}

        </div>
      </div>

      <div className="smallCart__componentButtons">
        <div className="smallCart__componentValues">
          <h1>Total</h1><span>{choosenCurrensy}{totalMoneyQuantity.toFixed(2)} </span>
        </div>

        <Link to='/cart'>
          <button
            onClick={() => setCartDropDown(false)}
            className="smallCart__componentButtonsViewBag"
          >VIEW BAG
          </button>
        </Link>

        <button
          className="smallCart__componentButtonsCheckOut"
        >CHECK OUT
        </button>
      </div>
    </div>
  )
}