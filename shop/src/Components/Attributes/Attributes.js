import React, { useState } from "react";
import { useStateValue } from "../../StateProvider";
import './Attributes.css'

export default function Attributes(props) {
  const [{ selectedAttributes }, dispatch] = useStateValue()
  console.log(selectedAttributes)
  console.log(props.uuid)
  let attributeStyle

  if (props.attribute === "With USB 3 ports") {
    attributeStyle = selectedAttributes.WithUSB3ports == props.value
      ? "attributesComponent__attributeItemSelected "
      : "attributesComponent__attributeItem"
  } else if (props.attribute === "Touch ID in keyboard") {
    attributeStyle = selectedAttributes.TouchIDinkeyboard == props.value
      ? "attributesComponent__attributeItemSelected "
      : "attributesComponent__attributeItem"
  } else if (props.attribute === "Capacity") {
    attributeStyle = selectedAttributes.Capacity == props.value
      ? "attributesComponent__attributeItemSelected "
      : "attributesComponent__attributeItem"
  } else if (props.attribute === "Size") {
    attributeStyle = selectedAttributes.Size == props.value
      ? "attributesComponent__attributeItemSelected "
      : "attributesComponent__attributeItem"
  }
  if (props.attribute === "Color") {
    attributeStyle = Object.values(selectedAttributes).find((el) => el == props.value)
      ? "attributesComponent__ItemSelectedColor"
      : "attributesComponent__ItemColor"
  }


  function addAttribute(event) {

    console.log(event.target.id)
    if (event.target.getAttribute("attribute") === "Color") {
      dispatch({
        type: 'SET_ATTRIBUTE_COLOR',
        color: event.target.id

      })
    }
    if (event.target.getAttribute("attribute") === "Size") {
      dispatch({
        type: 'SET_ATTRIBUTE_SIZE',
        size: event.target.id
      })
    }
    if (event.target.getAttribute("attribute") === "Capacity") {
      dispatch({
        type: 'SET_ATTRIBUTE_CAPACITY',
        capacity: event.target.id
      })
    }
    if (event.target.getAttribute("attribute") === "With USB 3 ports") {
      dispatch({
        type: 'SET_ATTRIBUTE_WITHPORTS',
        withPorts: event.target.id
      })
    }
    if (event.target.getAttribute("attribute") === "Touch ID in keyboard") {
      dispatch({
        type: 'SET_ATTRIBUTE_WITHTOUCH',
        withTouch: event.target.id
      })
    }
  }


  return (
    <div>
      <div
        attribute={props.attribute}
        id={props.value}
        onClick={(event) => { addAttribute(event) }}
        className={attributeStyle}
        style={{ backgroundColor: props.value }}
      >{props.attribute === "Color" ? null : props.value}</div>
    </div >
  )
}

