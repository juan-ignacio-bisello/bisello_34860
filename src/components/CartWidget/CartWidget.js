import './CartWidget.css'
import cart from './cart-shopping-solid.svg'
import { Link } from 'react-router-dom'

const Cartwidget = ({ totalQuantity }) => {
    return (
        <Link to={'/cart'} className='Cartwidget'>
            <img className='imag' src={cart}alt='cart-widget'/>
            { totalQuantity }
        </Link>
        
    )
}

export default Cartwidget