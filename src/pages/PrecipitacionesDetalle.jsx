import React, { useEffect, useState, useRef } from "react";
import {Container,Row,Col} from 'react-bootstrap';
import Encabezado1 from '../components/Encabezado1';
import {Button,Stack} from 'react-bootstrap';
import {useParams,useNavigate } from 'react-router-dom';
import { RiCheckboxFill, RiAlertFill,RiShowersFill } from "react-icons/ri";
import Actual from '../components/Actual';
import Estadistica from '../components/Estadistica';
import SolicitarDatos from '../components/SolicitarDatos';
import SocketClient from "../components/SocketClient";


// Import the JS and CSS:

const PrecipitacionesDetalle = ({setToken,token}) => {

  const { id } = useParams();

  const [estacion, setEstacion] = useState([]);
  const [estados,setEstados]=useState([]);
  const [unEstado, setUnEstado] =useState(undefined);
  const [estadoActual, setEstadoActual] =useState(undefined);
  useEffect(()=>{
    if(unEstado) {
      let es=estados;
      es.unshift(unEstado);
      es.slice(0, 10);
      setEstados(es);
      setEstadoActual(unEstado);
    }
  },[unEstado])

  let navigate = useNavigate();

  useEffect(() => {
   SolicitarDatos('estacion/ultimos5/id/'+id).then(x=>{setEstacion(x.data[0]);setEstados(x.data[0].estados);setEstadoActual(x.data[0].estados[0]);});
  }, []);

  return (
    <>
    <Container style={{background: "#8dadc8",color:"#073763",height:"90vh"}} fluid>
      <Row>
        <Col md={{ span: 6, offset: 6 }}>
          <Encabezado1 setToken={setToken}  token={token}/>
        </Col>
      </Row>
      <Row >
        <Col  sm={8}><h1>PRECIPITACIONES <RiShowersFill/></h1></Col><Col sm={4}><Button onClick={()=>navigate(-1)}>Volver al Panel General</Button></Col>
      </Row>
      <Row>
        <Col sm={3}><h3>Estacion n°: {id} </h3></Col>
        <Col sm={9}><h3>Denominacion: {estacion.name} </h3></Col>
      </Row>
      <Row><Col><h3>Ubicacion: {estacion.description}</h3></Col></Row>
      <Row className="justify-content-md-center">
        <Col >
        {estadoActual && <Actual estado={estadoActual} seleccionNivel='estadoLLuvia' seleccionValor='mmLluvia'/> }
        </Col>
        <Col >
        {estadoActual && <Estadistica estados={estados} seleccionNivel='estadoLLuvia' seleccionValor='mmLluvia'/> }
        </Col>
      </Row>
      <SocketClient cambioEstado={setUnEstado} idEstacion={id} />
    </Container>
    </>
  );
};

export default PrecipitacionesDetalle;
