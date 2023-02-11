import { useContext } from "react"
import { Link } from "react-router-dom"
import { CartContext } from "../../contex/CartContex"
import './CartContainer.css'

const CartContainer = () => {
    const { cart, total } = useContext(CartContext)

    const totalCart = () => {
        
    }
    return (
        <div>
            <h1>Cart</h1>
            <div className='list-cart'>
                <h3 className='list'>Nombre</h3>
                {
                    cart.map(prod => {
                        return (
                            <div>
                                <h5 key={prod.id}>{ prod.name }</h5>
                            </div>
                            
                        )
                    })
                }
                <h4> Total:${ total }</h4>
            </div>
            <Link to='/checkout'>Checkout</Link>
        </div>
    )
}

export default CartContainer