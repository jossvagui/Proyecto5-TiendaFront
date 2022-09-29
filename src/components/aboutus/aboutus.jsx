import React from 'react'
import NavBar from '../navBar/navBar'
import Footer from '../footer/footer'
import Alert from 'react-bootstrap/Alert';
import './aboutus.css';
import Accordion from 'react-bootstrap/Accordion';


const aboutus = () => {
  return (
    <>
      <NavBar />

      <div class='bienvenues'>
        <h1>¿Quiénes somos?</h1>
        <br />
        <Alert variant="light">
          <Alert.Heading>Celular Shop</Alert.Heading>
          <p>
            Somos una tienda online de equipos celular de gama alta. Todos nuestros equipos son nuevos, originales y tienen garantía directo con el fabricante. Puedes comunicarte con nostros mediante whatsapp o si lo prefieres mediante correo electrónico.
          </p>
          <hr />
          <p className="mb-0">
            Recuerda que tus compras están 100% protegidas.
          </p>
        </Alert>
      </div>
      <div className='preguntas'>
        <h1>Preguntas Frecuentes...</h1>
        <Accordion defaultActiveKey={['0']} alwaysOpen>
          <Accordion.Item eventKey="0">
            <Accordion.Header>¿Cuál es el tiempo de entrega?</Accordion.Header>
            <Accordion.Body>
              <b>El tiempo estimado de entrega es de 3 a 5 dias hábiles dentro de México.</b>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>¿Manejan reembolso?</Accordion.Header>
            <Accordion.Body>
              <b>Sí, en caso que el producto llegue en mal estado puedes solicitar el reebolso de tu pago.</b>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header>¿Cuál es el método de pago?</Accordion.Header>
            <Accordion.Body>
              <b>Por el momento el único método de pago es mediante PayPal.</b>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>


      <Footer />
    </>
  )
}

export default aboutus