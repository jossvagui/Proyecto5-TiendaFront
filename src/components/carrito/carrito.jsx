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
        <Card.Title>El carrito ha sido cargado de forma automática</Card.Title>
        <Card.Text>
        *Da click al botón debajo para proceder con el pago*
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