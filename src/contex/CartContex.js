import { createContext, useState } from "react"

export const CartContext = createContext()

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([])
    console.log(cart)

    const addItem = (productToAdd) => {
        if(!isInCart(productToAdd.id)) {
          setCart(prev => {
            console.log(prev)
            return [...prev, productToAdd]
          })
        } else {
          console.error('YA ESTA AGREGADO')
        }
    }

    const isInCart = (id) => cart.some(prod => id === prod.id)

    const getTotalQuantity = () => {
        let accu = 0
  
        cart.forEach(prod => {
          accu += prod.quantity
        })
  
        return accu
    }

    const getTotal = () => {
      let accu = 0
  
        cart.forEach(prod => {
          accu += prod.quantity * prod.price
        })
  
        return accu
    }

    const totalQuantity = getTotalQuantity()

    const total = getTotal()

    const clearCart = () => {
      setCart([])
    }

    return (
        <CartContext.Provider value={{ cart, addItem, isInCart, totalQuantity, total, clearCart}}>
            { children }
        </CartContext.Provider>
    )
}