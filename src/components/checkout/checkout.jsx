import React from 'react'
import NavBar from '../navBar/navBar'
import Footer from '../footer/footer'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './checkout.css';

const checkout = () => {
  return (
    <>
    <NavBar/>
    <div class="pagacion">
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Correo asociado con PayPal</Form.Label>
        <Form.Control type="email" placeholder="Correo PayPal" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Recordarme" />
      </Form.Group>
      <Button variant="secondary" type="submit">
        Pagar con PayPal
      </Button>
    </Form>
    </div>
    <Footer/>
    </>
  )
}

export default checkout