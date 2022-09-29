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
      <Card.Header>Regresa pronto ❤️</Card.Header>
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p>
            {' '}
            Recuerda que cada ingreso a tu cuenta genera recompensas.{' '}
          </p>
          <footer className="blockquote-footer">
            No te quedes sin ellas- <cite title="Source Title"></cite>
          </footer>
        </blockquote>
      </Card.Body>
    </Card>
    </div>
    <Footer/>
    </>
  )
}

export default logout