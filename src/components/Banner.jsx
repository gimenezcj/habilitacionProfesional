import React from "react";
import {Carousel} from 'react-bootstrap';

function Banner (props) {
  return (
    <Carousel variant="dark">
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://pbs.twimg.com/profile_banners/829714913413185536/1487674999/1500x500"
      alt="First slide"
    />
    <Carousel.Caption className="carruselshadow">
      <h3 style={{color:'white'}}>Estación principal</h3>
      <p style={{color:'white'}}>UTN La Plata</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="/imagen-zoocrop.jpg"
      alt="Second slide"
      width="1500px"
      height="500px"
    />

    <Carousel.Caption className="carruselshadow">
      <h3 style={{color:'white'}}>Estación</h3>
      <p style={{color:'white'}}>Zoo La Plata</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="/bannerr.png"
      alt="Third slide"
    />

    <Carousel.Caption className="carruselshadow">
      <h3 style={{color:'white'}}> ...</h3>
      <p style={{color:'white'}}>Próximamente nuevas estaciones</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
  )
}

export default Banner;
