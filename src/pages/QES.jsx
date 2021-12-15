import React from "react";
import {Container,Row,Col} from 'react-bootstrap';
import Encabezado1 from '../components/Encabezado1';

function QES({setToken,token}) {
  return (
    <Container style={{background: "#8dadc8",color:"#073763"}}>
    <Row>
      <Col md={{ span: 6, offset: 6 }}>
        <Encabezado1 setToken={setToken}  token={token}/>
      </Col>
    </Row>
    <Row>
        <p>Te damos la bienvenida a SAMACA</p>
        <h3>Sistema Autonomo para la Medicion de Cursos de Aguas</h3>
    </Row>
    </Container>
  );
}

export default QES;
