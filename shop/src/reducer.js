export const initialState = {
  cart: [],
  choosenCategory: 'all',
  choosenCurrensy: '$',
  productPageData: [],
  selectedAttributes: {
    Color: "",
    Size: "",
    Capacity: "",
    WithUSB3ports: "",
    TouchIDinkeyboard: "",
    Amount: 1
  },

}

export const getBasketTotal = (basket) =>
  basket?.reduce((amount, item) => item.price + amount, 0)



const reducer = (state, action) => {
  const cartItemIndex = state.cart.findIndex(
    (item) => item.uuid === action.uuid)

  switch (action.type) {
    case 'ADD_TO_CART':
      return {
        ...state,
        cart: [...state.cart, action.item]
      };
    case 'PRODUCT_PAGE_DATA':
      return {
        ...state,
        productPageData: [action.item]

      }
    case 'SET_ATTRIBUTE_COLOR':
      return {
        ...state,
        selectedAttributes: {
          ...state.selectedAttributes,
          Color: action.color
        }
      }
    case 'SET_ATTRIBUTE_SIZE':
      return {
        ...state,
        selectedAttributes: {
          ...state.selectedAttributes,
          Size: action.size
        }
      }
    case 'SET_ATTRIBUTE_CAPACITY':
      return {
        ...state,
        selectedAttributes: {
          ...state.selectedAttributes,
          Capacity: action.capacity
        }
      }
    case 'SET_ATTRIBUTE_WITHPORTS':
      return {
        ...state,
        selectedAttributes: {
          ...state.selectedAttributes,
          WithUSB3ports: action.withPorts
        }
      }
    case 'SET_ATTRIBUTE_WITHTOUCH':
      return {
        ...state,
        selectedAttributes: {
          ...state.selectedAttributes,
          TouchIDinkeyboard: action.withTouch
        }
      }
    case 'REMOVE_ALL_ATTRIBUTES':
      return {
        ...state,
        selectedAttributes: {
          Color: "",
          Size: "",
          Capacity: "",
          WithUSB3ports: "",
          TouchIDinkeyboard: "",
        }
      }

    case 'INCREASE_ITEM_AMOUNT':
      const itemInd = state.cart.findIndex(
        (item) => item.uuid === action.uuid,
      )
      state.cart[itemInd].Amount++
      return {
        ...state
      }
    case 'REDUCE_ITEM_AMOUNT':
      const itemIndex = state.cart.findIndex(
        (item) => item.uuid === action.uuid
      )
      state.cart[itemIndex].Amount--
      return {
        ...state
      }

    case 'SET_ATTRIBUTE_SIZE_IN_CART':
      state.cart[cartItemIndex].selectedAttributes.Size = action.size
      return {
        ...state
      }
    case 'SET_ATTRIBUTE_COLOR_IN_CART':
      state.cart[cartItemIndex].selectedAttributes.Color = action.color
      return {
        ...state
      }
    case 'SET_ATTRIBUTE_CAPACITY_IN_CART':
      state.cart[cartItemIndex].selectedAttributes.Capacity = action.capacity
      return {
        ...state
      }
    case 'SET_ATTRIBUTE_WITHPORTS_IN_CART':
      state.cart[cartItemIndex].selectedAttributes.WithUSB3ports = action.withPorts
      return {
        ...state
      }
    case 'SET_ATTRIBUTE_WITHTOUCH_IN_CART':
      state.cart[cartItemIndex].selectedAttributes.TouchIDinkeyboard = action.withTouch
      return {
        ...state
      }
    // case 'REMOVE_ITEM_FROM_CART':
    //   const indexItemToRemove = state.cart.findIndex(
    //     (item) => item.uuid === action.uuid)
    //   state.cart.splice(indexItemToRemove, 1)
    //   return {
    //     ...state,
    //   }
    case 'REMOVE_ITEM_FROM_CART':
      const indexItemToRemove = state.cart.findIndex(
        (item) => item.uuid === action.uuid)

      return {
        ...state,
        ...state.cart.splice(indexItemToRemove, 1),
        cart: [...state.cart]
      }

    case 'CHANGE_CURRENCY':
      return {
        ...state,
        choosenCurrensy: action.currency
      }
    case 'CHANGE_CATEGORY':
      return {
        ...state,
        choosenCategory: action.category,
      }


    default:
      return state;
  }
}

export default reducer