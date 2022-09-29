import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
// import imagenes from './clickeo.css'
import './clickeo.css';

const clickeo = () => {
    return (
      <>
      <div>
        <Carousel variant="dark">
          <Carousel.Item>
            <div class='carrusel'>
            <img
              className="d-block w-100"
              src="https://cdn.pixabay.com/photo/2013/07/30/12/25/bouquet-168831_960_720.jpg"
              alt="First slide"
            />
            </div>
            <Carousel.Caption>
              <h5>First slide label</h5>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
          <div class='carrusel'>
            <img
              className="d-block w-100"
              src="https://cdn.pixabay.com/photo/2015/03/26/23/09/cake-pops-693645__340.jpg"
              alt="Second slide"
            />
            </div>
            <Carousel.Caption>
              <h5>Second slide label</h5>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
          <div class='carrusel'>
            <img
              className="d-block w-100"
              src="https://cdn.pixabay.com/photo/2015/10/30/18/52/halloween-candy-1014629_960_720.jpg"
              alt="Third slide"
            />
            </div>
            <Carousel.Caption>
              <h5>Third slide label</h5>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
        </div>
        </>
      );
}

export default clickeo