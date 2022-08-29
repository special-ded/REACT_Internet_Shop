import React from "react";
import { useStateValue } from "../../StateProvider";
import SmallCartAttributes from '../SmallCartAttributes/SmallCartAttributes'
import './SmallCartItem.css'


export default function CartItem(props) {

  const [{ choosenCurrensy, cart }, dispatch] = useStateValue()

  return (
    <div>
      <div className="smallCartItem__component">
        <div className="smallCartItem__componentInner">
          <h1 className="smallCartItem__componentTitle">{props.product.name}</h1>
          <p className="smallCartItem__componentCurrency">{choosenCurrensy}{' '}
            {props.product.price.find(({ currency }) =>
              currency.symbol === choosenCurrensy).amount}</p>

          {props.product.attributes.map((attribute) => (
            <div className="smallCartItem__attributes">
              <h1 className="smallCartItem__attributeName" >{attribute.name}:</h1>
              <div className="smallCartItem__attributeItemContainer">
                {/* RENDER AND HANDLE ATTRIBUTES */}
                {attribute.items.map((item =>
                  <SmallCartAttributes
                    uuid={props.product.uuid}
                    attribute={attribute.name}
                    value={item.value}
                  />))}
              </div>
            </div>
          ))}
        </div>

        <div className="smallCartItem__imageCounterContainer">
          <div className="smallCartItem__counterContainer">
            <div
              onClick={() => cart.map((item) => {
                if (item.uuid.includes(props.product.uuid)) {
                  dispatch({
                    type: 'INCREASE_ITEM_AMOUNT',
                    uuid: item.uuid
                  })
                  console.log(item.Amount)
                }
              })}
              className="smallCartItem__counterPlus">
              <span className="smallCartItem__counterPlusSpan"></span>
              <span className="smallCartItem__counterPlusSpanTwo"></span>
            </div>
            <div className="smallCartItem__counterValue">{(cart.map((prod, i) => {
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
              className="smallCartItem__counterMinus">
              <span className="smallCartItem__counterMinusSpan"></span>
            </div>
          </div>

          <img
            src={props.product.gallery[0]}
            className="smallCartItem__image"
          />
        </div>

      </div>

    </div>


  )
}