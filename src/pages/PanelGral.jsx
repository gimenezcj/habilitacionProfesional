import React, { useEffect, useState } from "react";
import {Container,Row,Col} from 'react-bootstrap';
import Encabezado1 from '../components/Encabezado1';
import {Button,Stack} from 'react-bootstrap';
import {useParams } from 'react-router-dom';
import { RiCheckboxFill, RiAlertFill } from "react-icons/ri";
import { useNavigate, Link } from "react-router-dom";
import SocketClient from "../components/SocketClient";

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

const TypeButton=['success','success','warning','warning','danger']
const ImageButton=[<RiCheckboxFill/>,<RiCheckboxFill/>,<RiAlertFill />,<RiAlertFill />,<RiAlertFill />]
const BackgroundColor=['#dc3545','#ffca2c','#ffca2c','#157347','#157347','#157347']
const FrontColor=['white','black','black','white','white','white']

const NivelAgua=({estado})=>{
  if(estado===undefined || estado.estadoNivelCaudal===undefined )
    return (<Button variant="success" style={{background:'gray'}}  className="col-md-12 mx-auto" disabled>NIVEL DE AGUA  <h1><RiAlertFill /></h1></Button>)
  if(estado!==undefined)
    return (<Link  to={ "/estacion/agua/"+estado.idEstacion} ><Button variant={TypeButton[estado.estadoNivelCaudal]} className="col-md-12 mx-auto">NIVEL DE AGUA  <h1>{ImageButton[estado.estadoNivelCaudal]}</h1></Button></Link>);
  return (<></>)
}

const NivelLluvia=({estado})=>{

  if(estado===undefined || estado.estadoLLuvia===undefined )
    return (<Button variant="success" style={{background:'gray'}}  className="col-md-12 mx-auto" disabled>PRECIPITACIONES <h1><RiAlertFill /></h1></Button>)
  if(estado!==undefined)
    return (<Link  to={ "/estacion/lluvia/"+estado.idEstacion} ><Button variant={TypeButton[estado.estadoLLuvia]} className="col-md-12 mx-auto">PRECIPITACIONES <h1>{ImageButton[estado.estadoLLuvia]}</h1></Button></Link>);
  return (<></>)
}

const NivelBateria=({estado})=>{
  if(estado===undefined || estado.estadoBateria===undefined )
    return (<Button variant="success" style={{background:'gray'}}  className="col-md-12 mx-auto" disabled>ESTADO DE BATERIA <h1><RiAlertFill /></h1></Button>)
  if(estado!==undefined)
    return (<div style={{"background-color" : BackgroundColor[estado.estadoBateria], "color": FrontColor[estado.estadoBateria], "text-align":"center"}}>ESTADO DE BATERIA <h1>{ImageButton[4-estado.estadoBateria]}</h1></div>);
  return (<></>)
}



const PanelGral = ({setToken,token}) => {

  const { id } = useParams();

  const [estacion, setEstacion] =useState([]);
  const [estado  ,   setEstado] =useState([]);
  const [unEstado, setUnEstado] =useState(undefined);

  let navigate = useNavigate();

  useEffect(() => {
   DatosEstacion(id).then(x=>{
     setEstacion(x.data);
     if(x.data.estados!=undefined  && x.data.estados.length>0) {
       const aux=x.data.estados[0];
       aux.idEstacion=id;
      setUnEstado(aux);
     }

   });
  }, []);

  const handleNivel= ()=>{
    navigate("/estacion/agua/"+id, { replace: true });
  }

  const [loadClient, setLoadClient] = useState(true);


//  var estado="hola";

  return (
    <>
    <Container style={{background: "#8dadc8",color:"#073763",height:"100vh"}} fluid>
      <div style={{"text-align":"right"}}>
        <Encabezado1 setToken={setToken}  token={token}/>
      </div>
      <div style={{"text-align":"center"}}>
        <h1 >PANEL GENERAL</h1>
      </div>
      <Row>
        <Col  style={{"background-color":"beige"}}>
        <Stack gap={0} className="col-md-12 mx-auto">

          <h4>Estacion: {estacion.name} </h4>
          <h4>Identificacion: {estacion.id} </h4>
          <h4>Ubicacion: {estacion.description}</h4>
        </Stack>
        </Col>
        <Col  style={{"background-color":"cadetblue"}}>
        <Stack gap={4} className="col-md-8 mx-auto">
          <NivelAgua estado={unEstado}/>
          <NivelLluvia estado={unEstado}/>
          <NivelBateria estado={unEstado}/>
        </Stack>
        </Col>
      </Row>
      <div>
      <SocketClient cambioEstado={setUnEstado} idEstacion={id} />
      </div>

    </Container>
    </>
  );
};

export default PanelGral;
