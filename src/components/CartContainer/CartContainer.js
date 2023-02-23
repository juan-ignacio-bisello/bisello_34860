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
                <ul className="list-class">
                    <li className="list-title">Nombre</li>
                    <li>{
                        cart.map(prod => {

                            return (
                                <div>
                                    <h5 key={prod.id}>{ prod.name }</h5>
                                </div>

                            )
                        })
                    }
                    </li>
                </ul>

                <ul className="list-class">
                    <li className="list-title">Cantidad</li>
                    <li>
                        {
                            cart.map(prod => {

                                return (
                                    <div>
                                        <h5 key={prod.id}>{ prod.quantity }</h5>
                                    </div>

                                )
                            })
                        }
                    </li>
                </ul>

                <ul className="list-class">
                    <li className="list-title">Precio C/A</li>
                    <li>
                        {
                            cart.map(prod => {

                                return (
                                    <div>
                                        <h5 key={prod.id}>${ prod.price }</h5>
                                    </div>

                                )
                            })
                        }
                    </li>
                </ul>

                <ul className="list-class">
                    <li className="list-title">Subtotal</li>
                    <li>
                        {
                            cart.map(prod => {

                                let subTotal = prod.price * prod.quantity

                                return (
                                    <div>
                                        <h5 key={prod.id}>${ subTotal }</h5>
                                    </div>

                                )
                            })
                        }
                    </li>
                </ul>

                <h4 className="list-total"> Total: ${ total }</h4>
            </div>
            <Link to='/checkout'>Checkout</Link>
        </div>
    )
}

export default CartContainer