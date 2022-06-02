import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import CartWidget from '../CartWidget/CartWidget';

function NavBar() {

  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Link to='/'>CYD</Link> {/*Custom Your Desk*/}
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Link to="/">Inicio</Link>
            <Link to='/sobre-nosotros'>Sobre nosotros</Link>
            <Link to='/categoria/mouse'>Mouse</Link>
            <Link to="/categoria/teclados">Teclados</Link>
            <Link to='/categoria/luces'>Luces</Link>
            <Link to='/categoria/mousepad'>Mousepads</Link>
            <Link to="/categoria/auriculares">Auriculares</Link>

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