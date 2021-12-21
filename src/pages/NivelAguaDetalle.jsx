import React, { useEffect, useState, useRef } from "react";
import {Container,Row,Col} from 'react-bootstrap';
import Encabezado1 from '../components/Encabezado1';
import {Button,Stack} from 'react-bootstrap';
import {useParams,useNavigate } from 'react-router-dom';
import { RiCheckboxFill, RiAlertFill } from "react-icons/ri";



// Import the JS and CSS:

const DatosEstacion= async(id) => {
return await fetch('http://localhost:3800/estacion/id/'+id, {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json'
  },
})
  .then(data => data.json())
}

const NivelAguaDetalle = ({setToken,token}) => {

  const { id } = useParams();

  const [estacion, setEstacion] = useState([]);

  let navigate = useNavigate();


  useEffect(() => {
   DatosEstacion(id).then(x=>setEstacion(x.data));
  }, []);

  return (
    <>
    <Container style={{background: "#8dadc8",color:"#073763",height:"90vh"}} fluid>
      <Row>
        <Col md={{ span: 6, offset: 6 }}>
          <Encabezado1 setToken={setToken}  token={token}/>
        </Col>
      </Row>
      <Row>
        <Col>
        <Stack gap={0} className="col-md-12 mx-auto">
          <h1>DETALLE NIVEL DE AGUA</h1><Button onClick={()=>navigate(-1)}>Panel General</Button>
          <h3>Estacion numero: {estacion.id} </h3>
          <h3>Estacion numero: {estacion.name} </h3>
          <h3>Ubicacion: {estacion.description}</h3>
        </Stack>
        </Col>
      </Row>
      <Row className="justify-content-md-center">
        <Col >
        </Col>
        <Col >
        </Col>
      </Row>
    </Container>
    </>
  );
};

export default NivelAguaDetalle;
