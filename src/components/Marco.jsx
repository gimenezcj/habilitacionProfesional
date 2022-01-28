import React from "react";
import {Container,Row,Col} from 'react-bootstrap';
import Encabezado1 from './Encabezado1';
import Ingreso from './Ingreso';
import Banner from './Banner';

function Marco (props) {
  return (
    <Container style={{background: "#8dadc8",color:"#073763"}}>
      <Row>
        <Col md={{ span: 6, offset: 6 }}>
          <Encabezado1 />
        </Col>
      </Row>
      <Row>
        <Col>
          <p>Te damos la bienvenida a SAMCA</p>
          <h3>Sistema Autónomo para la Medición de Cursos de Agua</h3>
        </Col>
        <Col>
          <Ingreso />
        </Col>
      </Row>
      <Row>
        <Banner />
      </Row>
    </Container>
  )
}

export default Marco;
