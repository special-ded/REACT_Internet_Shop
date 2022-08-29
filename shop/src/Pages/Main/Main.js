import React from "react";
import { allProductsRequest } from '../../services/gql-requests'
import { productsCategoriesRequest } from '../../services/gql-requests'
import ProductCard from "../../Components/ProductCard/ProductCard";
import './Main.css'
import { gql, useQuery } from '@apollo/client';
import { useStateValue } from "../../StateProvider";
import { v4 as uuid } from 'uuid';

export default function Main() {
  const { loading, error, data } = useQuery(allProductsRequest);

  const [{ choosenCurrensy, choosenCategory }, dispatch] = useStateValue()

  if (loading) return 'Loading...';
  if (error) return `Error! ${error.message}`;
  const categoryIndex = data.categories.findIndex(
    (item) => item.name === choosenCategory
  )

  return (
    <main className="main-container">
      <p className="categoryName-word">{choosenCategory}</p>
      <div className="productCard-container" >
        {
          data.categories[categoryIndex].products.map((item, i) => (
            <ProductCard
              key={i}
              uuid={uuid()}
              id={item.id}
              inStock={item.inStock}
              image={item.gallery[0]}
              price={item.prices.find(({ currency }) => currency.symbol === choosenCurrensy).amount}
              priceLabel={choosenCurrensy}
              name={item.name}
            />))
        }
      </div>
    </main >
  )
}
