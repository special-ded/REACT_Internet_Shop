import React, { useState } from "react";
import { useStateValue } from "../../StateProvider";
import './SmallCartAttributes.css'

export default function Attributes(props) {
  const [{ cart }, dispatch] = useStateValue()
  let attributeStyle

  cart.map(item => {
    if (props.uuid === item.uuid) {
      if (props.attribute === "With USB 3 ports") {
        attributeStyle = item.selectedAttributes.WithUSB3ports === props.value
          ? "smallCartAttributes__attributeItemSelected "
          : "smallCartAttributes__attributeItem"
      } else if (props.attribute === "Touch ID in keyboard") {
        attributeStyle = item.selectedAttributes.TouchIDinkeyboard === props.value
          ? "smallCartAttributes__attributeItemSelected "
          : "smallCartAttributes__attributeItem"
      } else if (props.attribute === "Capacity") {
        attributeStyle = item.selectedAttributes.Capacity === props.value
          ? "smallCartAttributes__attributeItemSelected "
          : "smallCartAttributes__attributeItem"
      } else if (props.attribute === "Size") {
        attributeStyle = item.selectedAttributes.Size === props.value
          ? "smallCartAttributes__attributeItemSelected "
          : "smallCartAttributes__attributeItem"
      }

      if (props.attribute === "Color") {
        attributeStyle = Object.values(item.selectedAttributes).find((el) => el === props.value)
          ? "smallCartAttributes__attributeItemSelectedColor"
          : "smallCartAttributes__attributeItemColor"
      }
    }
  })




  function addAttribute(event) {

    if (event.target.getAttribute("attribute") === "Color") {
      dispatch({
        type: 'SET_ATTRIBUTE_COLOR_IN_CART',
        color: event.target.id,
        uuid: event.target.attributes.uuid.value

      })
    }
    if (event.target.getAttribute("attribute") === "Size") {
      dispatch({
        type: 'SET_ATTRIBUTE_SIZE_IN_CART',
        size: event.target.id,
        uuid: event.target.attributes.uuid.value
      })
    }
    if (event.target.getAttribute("attribute") === "Capacity") {
      dispatch({
        type: 'SET_ATTRIBUTE_CAPACITY_IN_CART',
        capacity: event.target.id,
        uuid: event.target.attributes.uuid.value
      })
    }
    if (event.target.getAttribute("attribute") === "With USB 3 ports") {
      dispatch({
        type: 'SET_ATTRIBUTE_WITHPORTS_IN_CART',
        withPorts: event.target.id,
        uuid: event.target.attributes.uuid.value
      })
    }
    if (event.target.getAttribute("attribute") === "Touch ID in keyboard") {
      dispatch({
        type: 'SET_ATTRIBUTE_WITHTOUCH_IN_CART',
        withTouch: event.target.id,
        uuid: event.target.attributes.uuid.value
      })
    }
  }


  return (
    <div>
      <div
        attribute={props.attribute}
        id={props.value}
        uuid={props.uuid}
        onClick={(event) => { addAttribute(event) }}
        className={attributeStyle}
        style={{ backgroundColor: props.value }}
      >{props.attribute === "Color" ? null : props.value}</div>
    </div >
  )
}

