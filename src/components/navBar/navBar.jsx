import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

const navBar = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
    <Container>
      <Navbar.Brand href="/">ReAl Shop</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="/aboutus">About Us</Nav.Link>
          <Nav.Link href="/productos">Productos</Nav.Link>
          
        </Nav>
        <Nav>
          
          <NavDropdown title="Mi cuenta" id="collasible-nav-dropdown">
            <NavDropdown.Item href="/registrarme">Registrarme</NavDropdown.Item>
            <NavDropdown.Item href="/iniciarsesion">
              Iniciar sesión
            </NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="/logout">
              Cerrar sesión
            </NavDropdown.Item>
          </NavDropdown>
          <Nav.Link eventKey={2} href="/carrito">
            Carrito
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}

export default navBar