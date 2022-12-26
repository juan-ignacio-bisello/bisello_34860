import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const BasicNavbar = () => {
    return (
        <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand href="#home">Diamond System</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#PCs">PCs Armadas</Nav.Link>
            <Nav.Link href="#Componentes">Componentes de PC</Nav.Link>
            <Nav.Link href="#Notebooks">Notebooks</Nav.Link>
          </Nav>
        </Container>
      </Navbar>     
    )
}

export default BasicNavbar