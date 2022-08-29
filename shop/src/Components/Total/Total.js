import React from "react";
import { useStateValue } from "../../StateProvider";
import './Total.css'

export default function Total() {
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
    <div className="Total__component">
      <div className="Total__componentInner">
        <div className="Total__componentTitles">
          <h1>Tax 21%: </h1>
          <h1>Quantity: </h1>
          <h2>Total:</h2>
        </div>
        <div className="Total__componentValues">
          <p>{choosenCurrensy}{(totalMoneyQuantity * 0.21).toFixed(2)}</p>
          <p>{totalItemsQuantity}</p>
          <p>{choosenCurrensy}{totalMoneyQuantity.toFixed(2)}</p>
        </div>
      </div>

      <button className="Total__componentButton" >ORDER</button>
    </div>

  )
}