import React, { useEffect, useState } from "react";
import './ProductCard.css'
import ProductCardCartLogo from '../../images/ProductCardCart-logo.png'
import { useStateValue } from "../../StateProvider";
import { gql, useQuery } from '@apollo/client';
import { productRequest } from "../../services/gql-requests";
import { Link } from "react-router-dom";
import ProductPage from "../ProductPage/ProductPage";

export default function ProductCard(props) {

  const [{ cart }, dispatch] = useStateValue()

  const [hovered, setHovered] = useState(false)
  const [hoveredOnCart, setHoveredOnCart] = useState(false)

  let productCardCartStyle = (hovered || hoveredOnCart) && props.inStock ?
    "productCard-cartLogoHovered" :
    "productCard-cartLogo";

  const { loading, error, data } = useQuery(productRequest(props.id));
  if (loading) return 'Loading...';
  if (error) return `Error! ${error.message}`;

  function getToProductPage(data) {

    dispatch({
      type: 'PRODUCT_PAGE_DATA',
      item: {
        uuid: props.uuid,
        id: data.product.id,
        name: data.product.name,
        gallery: data.product.gallery,
        price: data.product.prices,
        attributes: data.product.attributes,
        description: data.product.description,
        brand: data.product.brand,
        inStock: data.product.inStock
      }
    })
    dispatch({
      type: 'REMOVE_ALL_ATTRIBUTES'
    })
  }



  return (
    <div className="productCard-component">
      <div className="productCard-component_inner">
        <Link to={`/productPage:${props.id}`}>
          <img
            onClick={() => getToProductPage(data)}
            className={props.inStock ?
              "productCard-image" :
              "productCard-image notInStock"}
            src={props.image}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
          />
          {props.inStock ? null :
            < p
              onClick={() => getToProductPage(data)}
              className="productCard-notInStock"
            >OUT OF STOCK</p>}
          <img
            onClick={() => getToProductPage(data)}
            onMouseEnter={() => setHoveredOnCart(true)}
            onMouseLeave={() => setHoveredOnCart(false)}
            className={productCardCartStyle}
            src={ProductCardCartLogo}
          />
        </Link>

        <p className="productCard-title">{props.name}</p>
        <p className="productCard-price">{props.priceLabel} {props.price}</p>
      </div>
    </div >
  )
}