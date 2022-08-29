import React, { useState } from "react";
import { useStateValue } from "../../StateProvider";
import CartAttributes from "../CartAttributes/CartAttributes";
import './CartItem.css'
import ArrowLeft from '../../images/arrow-left.png'
import ArrowRight from '../../images/arrow-right.png'


export default function CartItem(props) {
  const [{ choosenCurrensy, cart }, dispatch] = useStateValue()
  const [counter, setCounter] = useState(0)

  let currentSlideImg = props.product.gallery[counter]

  function nextSlide() {
    if (counter != props.product.gallery.length) {
      setCounter((prev) => prev + 1)
    }
    if (counter == props.product.gallery.length - 1) {
      setCounter(0)
    }
  }

  function prevSlide() {
    if (counter != 0) {
      setCounter((prev) => prev - 1)
    }
    if (counter == 0) {
      setCounter(prev => prev + props.product.gallery.length - 1)
    }
  }

  return (
    <div>
      <div className="CartItem__component">
        <div>
          <h1 className="CartItem__componentTitle">{props.product.name}</h1>
          <p className="CartItem__componentCurrency">{choosenCurrensy}{' '}
            {props.product.price.find(({ currency }) =>
              currency.symbol === choosenCurrensy).amount}</p>
          {props.product.attributes.map((attribute) => (
            <div className="productPage__attributes">
              <h1 className="productPage__attributeName" >{attribute.name}:</h1>
              <div className="productPage__attributeItemContainer">
                {/* RENDER AND HANDLE ATTRIBUTES */}
                {attribute.items.map((item =>
                  <CartAttributes
                    uuid={props.product.uuid}
                    attribute={attribute.name}
                    value={item.value}
                  />))}
              </div>
            </div>
          ))}
        </div>
        <div className="cartItem__imageCounterContainer">
          <div className="cartItem__counterContainer">
            <div
              onClick={() => cart.map((item) => {
                if (item.uuid.includes(props.product.uuid)) {
                  dispatch({
                    type: 'INCREASE_ITEM_AMOUNT',
                    uuid: item.uuid
                  })
                }
              })}
              className="cartItem__counterPlus">
              <span className="span"></span>
              <span className="spanTwo"></span>
            </div>
            <div className="cartItem__counterValue">{(cart.map((prod, i) => {
              if (prod.uuid === props.product.uuid) {
                return props.product.Amount
              }
            }))
            }</div>
            <div onClick={() => cart.map((item) => {
              if (item.uuid.includes(props.product.uuid) && props.product.Amount > 1) {
                dispatch({
                  type: 'REDUCE_ITEM_AMOUNT',
                  uuid: item.uuid
                })
              }
              if (item.uuid.includes(props.product.uuid) && props.product.Amount == 1) {
                dispatch({
                  type: 'REMOVE_ITEM_FROM_CART',
                  uuid: item.uuid
                })
              }
            })}
              className="cartItem__counterMinus">
              <span className="span"></span>
            </div>
          </div>
          <img
            src={currentSlideImg}
            className="cartItem__image"
          />
          <div className="cartItem__slider">
            <div
              onClick={() => prevSlide()}
            ><img src={ArrowLeft} /></div>
            <div
              onClick={() => nextSlide()}
            ><img src={ArrowRight} /></div>
          </div>
        </div>
      </div>
      <hr className="cartItem__componentHr"></hr>
    </div>
  )
}