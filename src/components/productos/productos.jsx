import React from 'react'
import { Card,Button, Container, Row} from 'react-bootstrap'
import {ProductosLista} from '../helpers/productos'
import NavBar from '../navBar/navBar'
import Footer from '../footer/footer'
import './productos.css';


const productos = () => {
  return (
      <>
      <NavBar/>
    <Container>  
        <div class="productos">
    <h1>Productos</h1> 
        <Row>    
            {   
                ProductosLista.map ( ({id,seccion,nombre, descripcion,imagen}) => (
                    <Card key={id} style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={imagen} />
                    <Card.Body>
                        <Card.Title>{nombre}</Card.Title>
                        <Card.Text>
                        {descripcion}
                        </Card.Text>
                        <Button variant="secondary">Detalle</Button>
                    </Card.Body>
                    
                    </Card>
                    
                ))
                
            }
           
        </Row>
        
        </div>
    </Container>
    
    <Footer/>
    </>
  )
}

export default productos