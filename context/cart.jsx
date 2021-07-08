import commerce from '../lib/commerce'
import { createContext, useContext, useEffect, useReducer } from 'react'

const CartStateContext = createContext()
const CartDispatchContext = createContext()

//actions
const SET_CART = 'set-cart'

const initialState = {
  total_items: 0,
  total_unique_items: 0,
  line_items: [],
}

const reducer = (state, action) => {
  switch (action.type) {
    case SET_CART:
      return { ...state, ...action.payload }
    default:
      throw new Error(`Unknown action: ${action.type}`)
  }
}

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  useEffect(() => {
    getCart()
  }, [])

  const setCart = (payload) => dispatch({ type: SET_CART, payload })

  const getCart = async () => {
    try {
      const cart = await commerce.cart.retrieve()
      setCart(cart)
    } catch (error) {
      //   display some toasts to let users know what's wrong
      console.log(error)
    }
  }

  return (
    <CartDispatchContext.Provider value={{ setCart }}>
      <CartStateContext.Provider value={state}>
        {children}
      </CartStateContext.Provider>
    </CartDispatchContext.Provider>
  )
}

export const useCartState = () => useContext(CartStateContext)
export const useCartDispatch = () => useContext(CartDispatchContext)
