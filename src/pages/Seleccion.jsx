import React, { useEffect, useRef, ReactElement } from "react";
import {Container,Row,Col} from 'react-bootstrap';
import { Wrapper, Status ,Marker} from "@googlemaps/react-wrapper";

import Encabezado1 from '../components/Encabezado1';

const render = (status: Status): ReactElement => {
  if (status === Status.LOADING) return <h3>{status} ..</h3>;
  if (status === Status.FAILURE) return <h3>{status} ...</h3>;
  return null;
};

function MyMapComponent({
  center,
  zoom,
}: {
  center: google.maps.LatLngLiteral;
  zoom: number;
}) {
  const ref = useRef();

  useEffect(() => {
    new window.google.maps.Map(ref.current, {
      center,
      zoom,
    });
  });

  return <div ref={ref} id="map" />;
}

function Seleccion({setToken,token}) {

let stores= [{lat: 47.49855629475769, lng: -122.14184416996333},
            {latitude: 47.359423, longitude: -122.021071},
            {latitude: 47.2052192687988, longitude: -121.988426208496},
            {latitude: 47.6307081, longitude: -122.1434325},
            {latitude: 47.3084488, longitude: -122.2140121},
            {latitude: 47.5524695, longitude: -122.0425407}]


const  displayMarkers = () => {
    return this.state.stores.map((store, index) => {
      return <Marker key={index} id={index} position={{
       lat: store.latitude,
       lng: store.longitude
     }}
     onClick={() => console.log("You clicked me!")} />
    })
  }

    const center = { lat: -34.397, lng: 150.644 };
    const zoom = 4;

    return (
      <Container style={{background: "#8dadc8",color:"#073763"}}>
        <Row>
          <Col md={{ span: 6, offset: 6 }}>
            <Encabezado1 setToken={setToken}  token={token}/>
          </Col>
        </Row>
        <Row>
          <Col>

                      <iframe
                        width="800"
                        height="450"
                                style={{"border":"0"}}
                        loading="lazy"
                        allowfullscreen
                        src="https://www.google.com/maps/embed/v1/place?key=AIzaSyCWb0sbVhKN2j0LaRJo4v6jOJPRmcmrKpY&q=-34.905,-57.925"

                        >

                      </iframe>


      </Col>
    </Row>
    </Container>
    );
  }



export default Seleccion;

//-34° 55' 32" N, -57° 58' 31" E.



//<Wrapper apiKey="AIzaSyATSprSu7xcYW8fwrrGkoGqEaiXrPAx9iU" render={render}>
//  <MyMapComponent center={center} zoom={zoom} />
//</Wrapper>
