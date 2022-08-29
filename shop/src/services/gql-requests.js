import gql from "graphql-tag";



const allProductsRequest = gql`
  query {
    categories {
      name
      products {
        id
        attributes {
          name
        }
        name
        inStock
        gallery
        prices {
          currency { symbol, label }
          amount
        }
      }
    }
  }
`;

const productsCategoriesRequest = gql`
  query {
    categories {
      name
      products {
        id
        attributes {
          name
        }
        name
        inStock
        gallery
        prices {
          currency { symbol, label }
          amount
        }
      }
    }
  }
`;
const categoriesNameRequest = () => gql`
  query {
    category {
      name
    }
    categories {
      name
    }
  }
`;
const productAttributesRequest = (itemName) => gql`
                query {
                  product(id: "${itemName}") {            
                    name            
                    gallery
                    prices {
                      amount
                      currency { label }
                    }
                  }
                }
              `;

const currenciesRequest = () => gql`
query {
  currencies { 
    label
  }
}
`;

const pricesRequest = () => gql`
query {
  category {
    products {
      id
      prices {
        currency { label }
        amount
      }
    }
  }
}
`;
const productRequest = (productId) => gql`
        query {
          product(id: "${productId}") {
            id
            name
            inStock
            gallery
            description
            category
            attributes {
              
              name
              items {
                id
                value
                displayValue
              }
            }
            prices {
              amount
              currency { symbol, label }
            }
            brand
          }
        }
      `;

export {
  allProductsRequest,
  productsCategoriesRequest,
  categoriesNameRequest,
  productAttributesRequest,
  currenciesRequest,
  pricesRequest,
  productRequest,
};
