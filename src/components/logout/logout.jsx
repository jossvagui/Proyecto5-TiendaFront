import React from 'react'
import NavBar from '../navBar/navBar'
import Footer from '../footer/footer'
import Card from 'react-bootstrap/Card';
import './logout.css';

const logout = () => {
  return (
    <>
    <NavBar/>
    <div class="adiosin">
    <Card>
      <Card.Header>Sesión cerrada satisfactoriamente</Card.Header>
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p>
            {' '}
            Para poder realizar alguna compra tendrás que iniciar sesión nuevamente.{' '}
          </p>
          
        </blockquote>
      </Card.Body>
    </Card>
    </div>
    <Footer/>
    </>
  )
}

export default logout