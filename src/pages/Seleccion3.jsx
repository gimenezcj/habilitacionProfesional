import React, { useEffect, useState, useRef } from "react";
import {TileLayer, MapContainer, LayersControl, Marker,Popup} from "react-leaflet";
import {Container,Row,Col} from 'react-bootstrap';
import Encabezado1 from '../components/Encabezado1';
import IconsMap from '../components/IconsMap';
import IconosDetalle from '../components/IconosDetalle2';

import {Button} from 'react-bootstrap';
import { Link } from 'react-router-dom';

// Import the JS and CSS:
import 'leaflet/dist/leaflet.css';
import './mapa.css';

// Base map tile:
const maps = {
  base: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
};

const Icono=({pos,estado,nombre,ubicacion,id})=>{
  return (
    <Marker position={[pos[0],pos[1]]} icon={IconsMap[estado]}>
      <Popup>
        <h2>{nombre}</h2>
        <p>{ubicacion}</p>
        <Link  to={ "/estacion/"+id}>
          <Button >Ver datos de la estacion</Button>
        </Link>
      </Popup>
    </Marker>)}

const ultimoEstado=(e)=>{
    if (e.length===0)
      return 5;
    return e[0].estadoNivelCaudal;
}

const Seleccion3 = ({setToken,token}) => {

  const [estaciones, setEstaciones] = useState([]);

  useEffect(() => {
   IconosDetalle().then(x=>setEstaciones(x.data));
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
        <Col><div class="d-flex justify-content-center">
        <h1>RED DE ESTACIONES</h1></div>
        </Col>
      </Row>
      <Row>
        <Col><div class="d-flex justify-content-center">
        Haga click en la estacion que desea consultar</div>
        </Col>
      </Row>
      <Row>
        <Col>
          <MapContainer  style={{width:"100%",position:"relative"}} center={[-34.905,-57.925]} zoom={12} zoomControl={true}>
            <TileLayer
              attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              url={maps.base}
            />
               {estaciones.map(e =>
                 <Icono pos={[e.lat,e.lng]} estado={ultimoEstado(e.estados)} nombre={e.name} ubicacion={e.description} id={e.id} />
               )}
          </MapContainer>
        </Col>
      </Row>
    </Container>
    </>
  );
};

export default Seleccion3;
