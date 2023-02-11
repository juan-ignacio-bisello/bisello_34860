import { useContext, useState } from 'react'
import ItemCount from '../ItemCount/ItemCount'
import { Link } from 'react-router-dom'
import './ItemDetail.css'
import { CartContext } from '../../contex/CartContex'
import { NotificationContext } from '../../notification/NotificationService'

const ButtonCount = ({ onConfirm, stock, initial = 1 }) => {
    const [count, setCount] = useState(initial)

    const increment = () => {
        if(count < stock) {
            setCount(count + 1)
        }

    }

    const decrement = () => {
            setCount(count - 1)

    }

    return (
        <div>
            <p>{count}</p>
            <button onClick={decrement}>-</button>
            <button onClick={increment}>+</button>
            <button onClick={() => onConfirm(count)}>Agregar al carrito</button>
        </div>
    )
}


const ItemDetail = ({ id, name, category, img, price, stock, description, setCart}) => {
    // const [quantity, setQuantity] = useState(0)

    const ItemCount = ButtonCount

    const { addItem, isInCart } = useContext(CartContext)
    const setNotification = useContext(NotificationContext)

    const handleOnAdd = (quantity) => {
        console.log('Agregue al carrito: ', quantity)

        // setQuantity(parseInt(quantity))

        addItem({ id, name, price, quantity })
        setNotification(`se agrego correctamente ${quantity} ${name}`)
    }

    return (
        <article className='details' >
            <header>
                <h2>
                    {name}
                </h2>
            </header>
            <picture >
                <img className='image' src={img} alt={name}/>
            </picture>
            <section className='fonts'>
                <p  >
                    Categoria: {category}
                </p>
                <p>
                    Descripción: {description}
                </p>
                <p>
                    Precio: {price}
                </p>
            </section>           
            <footer>
                {
                    isInCart(id) ? (
                        <Link to='/cart'>Terminar compra</Link>
                    ) : (
                        <ItemCount stock={stock} onConfirm={handleOnAdd} />
                    )
                }
            </footer>
        </article>
    )
}

export default ItemDetail