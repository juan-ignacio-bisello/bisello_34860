import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Cartwidget from '../CartWidget/CartWidget';
import './Navbar.css'
import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        <Container className='navbar'>
          <Link to='/'>
            <h1 className="title">Diamond System</h1>
          </Link>
          <Nav className="me-auto">
            <NavLink className={ ({isActive}) => isActive ? 'ActiveOption' : 'Option'} to={`/category/pcs-armadas`}>PCs Armadas</NavLink>
            <NavLink className={ ({isActive}) => isActive ? 'ActiveOption' : 'Option'} to={`/category/componetes-pc`}>Componentes de PC</NavLink>
            <NavLink className={ ({isActive}) => isActive ? 'ActiveOption' : 'Option'} to={`/category/notebooks`}>Notebooks</NavLink>
          </Nav>
          <Cartwidget/>
        </Container>

    )
}

export default Navbar