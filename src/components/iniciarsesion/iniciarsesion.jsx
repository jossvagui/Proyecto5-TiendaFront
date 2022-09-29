import React from 'react'
import NavBar from '../navBar/navBar'
import Footer from '../footer/footer'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './iniciarsesion.css';

const iniciarsesion = () => {
  return (
    <>
    <NavBar/>

    <br />
    <br />
    <br />
    <br />
    <br />
    <br />

    <div class="ingresacion">
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          Nunca compartiremos tu correo con alguien más.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Mantener sesión activa" />
      </Form.Group>
      <Button variant="secondary" type="submit">
        Entrar
      </Button>
    </Form>
    </div>

    <br />
    <br />
    <br />
    

    <Footer/>
    </>

  )
}

export default iniciarsesion