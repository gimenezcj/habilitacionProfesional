import React from "react";
import {Container,Row,Col} from 'react-bootstrap';
import Encabezado1 from '../components/Encabezado1';

function Funcionalidades({setToken,token}) {
  return (
    <Container style={{background: "#8dadc8",color:"#073763"}}>
    <Row>
      <Col md={{ span: 6, offset: 6 }}>
        <Encabezado1 setToken={setToken}  token={token}/>
      </Col>
    </Row>
    <Row>
        <h2>Funcionalidades</h2>
        <h3>
          <li>uno</li>
          <li>dos</li>
          <li>tres</li>
          <li>cuatro</li>
        </h3>
    </Row>
    </Container>
  );
}

export default Funcionalidades;
