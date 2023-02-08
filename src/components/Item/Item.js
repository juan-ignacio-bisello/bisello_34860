import { Link } from 'react-router-dom'
import './Item.css'
import Card from 'react-bootstrap/Card';
import { useContext } from 'react';
import { CartContext } from '../../contex/CartContex'


const Item = ({id, name, img, price}) => {

    const handleOnClick = (event) => {
        event.stopPropagation()
        console.log('hice click en item')
    }

    const value = useContext(CartContext)
    console.log(value)
    return (
        <Card className='CardItem' onClick={handleOnClick}>
            <Card.Title>
                <h2>
                    {name}
                </h2>
            </Card.Title>

            <Card.Img variant="top" src={img} alt={name}/>
            
            <Card.Text className='Price'>
                <b>
                    Precio: ${price}
                </b>
            </Card.Text>

            <footer className='ItemFooter'>
                <Link to={`/detail/${id}`} className='Option'>Ver detalle</Link>
            </footer>
        </Card>
    )
}

export default Item