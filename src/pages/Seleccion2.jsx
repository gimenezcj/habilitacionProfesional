import React, { Component } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import {Container,Row,Col} from 'react-bootstrap';
import Encabezado1 from '../components/Encabezado1';

const position = [-34.905,-57.925]

function Seleccion2({setToken,token}) {
return (
  <Container style={{background: "#8dadc8",color:"#073763"}}>
    <Row>
      <Col md={{ span: 6, offset: 6 }}>
        <Encabezado1 setToken={setToken}  token={token}/>
      </Col>
    </Row>
    <Row>
      <Col>

      <MapContainer center={position} zoom={13} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="http://www.pixpaper.com.ar/gis/public/imagenes/mapas/{s}/{z}/{x}/{y}.png"
        />
        <Marker position={position}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
  </Col>
</Row>
</Container>
)
}

export default Seleccion2;


//https://{s}.basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}.png
