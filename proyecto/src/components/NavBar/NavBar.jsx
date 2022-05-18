import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import CartWidget from '../CartWidget/CartWidget';

function NavBar() {

  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Link to='/'>Andre Cucina</Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Link to="/">Inicio</Link>
            <Link to='/sobre-nosotros'>Sobre nosotros</Link>
            <Link to='/categoria/electronics'>Mouse</Link>
            <Link to="/categoria/jewelery">Teclados</Link>
            <Link to='/categoria/luces'>Luces</Link>
          </Nav>
          <Nav>
            <Link to='/cart'>
              <CartWidget />
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );

}

export default NavBar;