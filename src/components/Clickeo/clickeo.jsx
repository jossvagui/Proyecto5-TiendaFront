import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
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
              src="https://cdn.pixabay.com/photo/2020/08/22/01/34/cellphones-5507342_960_720.jpg"
              alt="First slide"
            />
            </div>
            <Carousel.Caption>
              <h5>Diversas Marcas</h5>
              <p>Manejamos una variedad de marcas y modelos</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
          <div class='carrusel'>
            <img
              className="d-block w-100"
              src="https://cdn.pixabay.com/photo/2022/09/25/22/25/iphones-7479304_960_720.jpg"
              alt="Second slide"
            />
            </div>
            <Carousel.Caption>
              <h5>Lo Más Reciente</h5>
              <p>Los equipos más nuevos en inventario</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
          <div class='carrusel'>
            <img
              className="d-block w-100"
              src="https://cdn.pixabay.com/photo/2018/02/24/21/40/smartphone-3179295_960_720.jpg"
              alt="Third slide"
            />
            </div>
            <Carousel.Caption>
              <h5>Equipos originales</h5>
              <p>
                Todos nuestros equipos son nuevo y originales
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
        </div>
        </>
      );
}

export default clickeo