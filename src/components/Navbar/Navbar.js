import './Navbar.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Cartwidget from '../CartWidget/CartWidget';
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { useContext } from 'react';
import { CartContext } from '../../contex/CartContex';

const Navbar = () => {

  const navigate = useNavigate()

  const { totalQuantity } = useContext(CartContext)

    return (
        <Container className='navbar'>
          <Link to='/'>
            <h1 className="title" onClick={() => navigate('/')}>Diamond System</h1>
          </Link>
          <Nav className="me-auto">
            <NavLink className={ ({isActive}) => isActive ? 'ActiveOption' : 'Option'} to={`/category/pcs-armadas`}>PCs Armadas</NavLink>
            <NavLink className={ ({isActive}) => isActive ? 'ActiveOption' : 'Option'} to={`/category/componetes-pc`}>Componentes de PC</NavLink>
            <NavLink className={ ({isActive}) => isActive ? 'ActiveOption' : 'Option'} to={`/category/notebooks`}>Notebooks</NavLink>
          </Nav>
          <Cartwidget totalQuantity={totalQuantity}/>
        </Container>

    )
}

export default Navbar