import React from 'react'
import NavBar from '../navBar/navBar'
import Footer from '../footer/footer'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './registrarme.css';

const registrarme = () => {
  return (
    <>
    
    <NavBar/>

    
    <div class="formis">
    <Form>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Nombre (s)</Form.Label>
        <Form.Control type="text" placeholder="Nombre" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Apellido (s)</Form.Label>
        <Form.Control type="text" placeholder="Apellidos" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          Nunca compartiremos tu correo con nadie más.
        </Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Edad</Form.Label>
        <Form.Control type="number" placeholder="Edad" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Pais</Form.Label>
        <Form.Control type="text" placeholder="País" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Contraseña</Form.Label>
        <Form.Control type="password" placeholder="Confirmar contraseña" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Recibir promociones" />
      </Form.Group>
      <Button variant="secondary" type="submit">
        Registrame ahora
      </Button>
    </Form>
    </div>

    <Footer/>
    </>
  )
}

export default registrarme