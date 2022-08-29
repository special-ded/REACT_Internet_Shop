import React, { useState } from "react";
import './Cart.css'
import { useStateValue } from "../../StateProvider";
import ProductPage from "../../Components/ProductPage/ProductPage";
import CartItem from "../../Components/CartItem/CartItem";
import Total from "../../Components/Total/Total";
import { v4 as uuid } from 'uuid';



export default function Cart() {
  const [{ cart }, dispatch] = useStateValue()

  console.log(cart)
  return (
    <div className="Cart__component">
      <p className="Cart__componentTitle">{cart.length == 0 ? "CART IS EMPTY" : "CART"}</p>
      <hr className="Cart__componentHr"></hr>
      {cart.map((product) =>
        < CartItem
          key={uuid()}
          product={product}
        />
      )}
      <Total />
    </div>
  )
}