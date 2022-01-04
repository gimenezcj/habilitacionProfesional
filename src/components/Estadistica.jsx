import React from "react";
import {Container,Row,Col} from 'react-bootstrap';

import Datos2 from './Datos2';

function Estadistica (props) {
  const {estados}=props;

  return (
<Container >
  <Row><Col style={{"text-align":"center"}}>ESTADISTICA</Col></Row>
  <Row><Col>Ultimas mediciones</Col></Row>
  <Row><Col><Datos2 estados={estados}/></Col></Row>
</Container>
  )
}

export default Estadistica;
