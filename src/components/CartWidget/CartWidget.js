import './CartWidget.css'
import cart from './cart-shopping-solid.svg'

const Cartwidget = ({ totalQuantity }) => {
    return (
        <div className='Cartwidget'>
            <img className='imag' src={cart}alt='cart-widget'/>
            { totalQuantity }
        </div>
    )
}

export default Cartwidget