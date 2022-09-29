import React from 'react'
import NavBar from '../navBar/navBar'
import Footer from '../footer/footer'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './carrito.css';

const carrito = () => {
  return (
    <>
    <NavBar/>
    <div class="continuarcompra">
    <Card className="text-center">
      <Card.Header>Resumen de compra</Card.Header>
      <Card.Body>
        <Card.Title>Cupon de descuento</Card.Title>
        <Card.Text>
        **Ahorra 2.25% en tus compras pagando con tarjeta de débito.
        </Card.Text>
        <Button href='/checkout' variant="secondary">Checkout</Button>
      </Card.Body>
      <Card.Footer className="text-muted">Ver detalles del pedido</Card.Footer>
    </Card>
    </div>
    <Footer/>
    </>
  )
}

export default carrito