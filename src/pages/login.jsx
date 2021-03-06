import React from "react";
import {Container,Row,Col} from 'react-bootstrap';
import Encabezado1 from '../components/Encabezado1';
import Ingreso from './../components/Ingreso';
import Banner from './../components/Banner';

function Login({ setToken,token }) {
  return (
    <Container style={{background: "#8dadc8",color:"#073763"}}>
      <Row style={{"margin-bottom":"3vh"}}>
        <Col >
          <Encabezado1 setToken={setToken}  token={token}/>
        </Col>
      </Row>
      <Row>
        <Col>
          <p>Te damos la bienvenida a SAMCA</p>
          <h3>Sistema Autónomo para la Medición de Cursos de Agua</h3>
        </Col>
        <Col>
          <Ingreso setToken={setToken}  token={token}/>
        </Col>
      </Row>
      <Row style={{"margin-top":"5vh"}}>
        <Banner />
      </Row>
    </Container>
  );
}

export default Login;
