import React from "react";
import {Container,Row,Col} from 'react-bootstrap';
import Moment from 'moment';
import Datos1 from './Datos1';


function Actual (props) {
  const {estado}=props;
  const nivel=  ['BAJO','BAJO','MEDIO','MODERADO','PELIGROSO']
  return (
<Container >
  <Row><Col style={{"text-align":"center"}}>ACTUAL</Col></Row>
  <Row><Col>Nivel: {nivel[estado.estadoNivelCaudal]}</Col><Col>Registrado: {Moment(estado.fechaDatos).format('d/MM/YY hh:mm')}</Col></Row>
  <Row><Col><Datos1 nivel={estado.estadoNivelCaudal}/></Col></Row>
</Container>
  )
}

export default Actual;
