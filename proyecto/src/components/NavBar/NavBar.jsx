import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import CartWidget from '../CartWidget/CartWidget';

function NavBar() {

  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">Andre Cucina</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#features">Inicio</Nav.Link>
            <Nav.Link href="#pricing">Sobre nosotros</Nav.Link>
            <Nav.Link href='#'>Cómo comprar</Nav.Link>
            <NavDropdown title="Delicias" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Tortas</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Galletas</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Panificados</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Sin Tacc</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#deets">Contacto</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="#">
              <CartWidget />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );

}

export default NavBar;