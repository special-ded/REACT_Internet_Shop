import React, { useState } from "react";
import { useStateValue } from "../../StateProvider";
import './ProductPage.css'
import parse from 'html-react-parser'
import Attributes from "../Attributes/Attributes";


export default function ProductPage() {
  const [{ productPageData, choosenCurrensy, cart, selectedAttributes }, dispatch] = useStateValue()
  const [selected, setSelected] = useState('')

  console.log(productPageData[0].uuid)

  function addToCart(data) {
    dispatch({
      type: 'ADD_TO_CART',
      item: {
        uuid: productPageData[0].uuid,
        id: data.id,
        name: data.name,
        gallery: data.gallery,
        price: data.price,
        attributes: data.attributes,
        description: data.description,
        brand: data.brand,
        inStock: data.inStock,
        selectedAttributes: selectedAttributes,
        Amount: 1
      }

    })
  }

  return (
    <div >
      {
        productPageData.map((item) => (
          <div className="productPage">
            <div className="productPage__listContainer">
              <ul>
                {item.gallery.map((picture =>
                  <li
                    key={item.key}
                    className="productPage__listImage">
                    <img
                      onClick={(event) => setSelected(event.target.src)}
                      className="productPage__smallImage"
                      src={picture} />
                  </li>
                ))}
              </ul>
            </div>
            <div className="productPage__mainContainer">
              <img className="productPage__mainImage"
                src={selected === '' ? item.gallery[0] : selected} />
              <div className="productPage__titleContainer">
                <h3 className="productPage__title">{item.name}</h3>

                {item.attributes.map((attribute) => (
                  <div className="productPage__attributes">
                    <h1 className="productPage__attributeName" >{attribute.name}:</h1>
                    <div className="productPage__attributeItemContainer">

                      {/* RENDER AND HANDLE ATTRIBUTES */}
                      {attribute.items.map((item =>
                        <Attributes
                          uuid={productPageData[0].uuid}
                          attribute={attribute.name}
                          value={item.value}
                          style={{ backgroundColor: item.value }} />))}

                    </div>
                  </div>
                ))}
                <p className="productPage__price">PRICE:  </p>
                <span className="productPage__priceValue">
                  {choosenCurrensy} {item.price.find(({ currency }) =>
                    currency.symbol === choosenCurrensy).amount

                  }
                </span>

                <button
                  onClick={() => item.inStock && addToCart(item)}
                  className="productPage__button">
                  {item.inStock ? "ADD TO CART" : "OUT OF STOCK"}
                </button>
                <p className="productPage__description" >
                  {parse(item.description)}
                </p>
              </div>
            </div>

          </div>



        ))
      }
    </div >
  )
}


