import React from 'react'
import Card from 'react-bootstrap/Card'
import './jumbotron.css';



const jumbotron = () => {
  return (
    <>
    <br/>
    <div class='tarjetilla d-flex justify-content-center'>
    <Card class="d-flex justify-content-center" style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://cdn.pixabay.com/photo/2014/04/05/11/07/cardboard-314504_960_720.jpg" />
      <Card.Body>
        <Card.Title>50% off</Card.Title>
        <Card.Text>
          Realiza tu pedido ahora mismo y recibe un increíble descuento y envío gratis!!!.
        </Card.Text>
      </Card.Body>
    </Card>
    </div>
  </>
  )
}

export default jumbotron