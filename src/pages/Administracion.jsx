import React, { useEffect, useState, useRef } from "react";
import {TileLayer, MapContainer, LayersControl, Marker,Popup,useMapEvents,useMap,MapConsumer} from "react-leaflet";
import {Container,Row,Col,Form,Modal} from 'react-bootstrap';
import Encabezado1 from '../components/Encabezado1';
import IconsMap from '../components/IconsMap';
import IconosDetalle from '../components/IconosDetalle2';

import {Button} from 'react-bootstrap';
import { Link } from 'react-router-dom';

import { FaUserFriends,FaRegThumbsDown,FaRegThumbsUp,FaPlusSquare } from "react-icons/fa";
import {AiOutlineDelete} from "react-icons/ai";
import {GoAlert} from "react-icons/go";


// Import the JS and CSS:
import 'leaflet/dist/leaflet.css';
import './mapa.css';

// Base map tile:
const maps = {
  base: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
};


const ultimoEstado=(e)=>{
    if (e.length===0)
      return 5;
    return e[0].estadoNivelCaudal;
}

async function crearEstacion(credentials) {
 return fetch('http://localhost:3800/estacion/create', {
   method: 'POST',
   headers: {
     'Content-Type': 'application/json'
   },
   body: JSON.stringify(credentials)
 })
   .then(data => data.json())
}

const Administracion = ({setToken,token}) => {

  const [estaciones, setEstaciones] = useState([]);
  const [nro, setNro] = useState('');
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [mover,setMover]=useState(true);
  const [lat,setLat]=useState();
  const [lng,setLng]=useState();
  const [iconCurrent,setIconCurrent]=useState(false);
  const [iconos,setIconos]=useState([]);
  const [center,setCenter]=useState(false);
  const [map, setMap] = useState(null);

  let centro={lat:0,lng:0};

const editarEstacion=(name,description,nro)=> {
  setMover(false);
  setDescription(description);
  setName(name);
  setNro(nro);

}

const handleSubmit = async e => {
  const lat= iconCurrent.lat;
  const lng= iconCurrent.lng;

 e.preventDefault();

if(!iconCurrent.id){

 const token2 = await crearEstacion({
   nro,
   name,
   description,
   lat,lng
 }).then((d)=>{
   if(d.success){
     setModalTitle("Nueva estacion");
     setModalDetalle("Se agregado una nueva estacion al sistema");
     setShow(true);
     estaciones[estaciones.length-1].id=d.data.id;
     estaciones[estaciones.length-1].nro=d.data.nro;
     estaciones[estaciones.length-1].name=d.data.name;
     estaciones[estaciones.length-1].description=d.data.description;
     estaciones[estaciones.length-1].lat=d.data.lat;
     estaciones[estaciones.length-1].lng=d.data.lng;
     setIconCurrent(false);
   }
 });
  }else{
    actualizar();
  }
}


  const Icono=({e})=>{
    let i2;
    if (!iconCurrent.id) i2=estaciones.length-1;
    else i2=estaciones.findIndex(e=>e.id===iconCurrent.id);

    let m=
      <Marker position={[e.lat,e.lng]} icon={IconsMap[ultimoEstado(e.estados)]}  eventHandlers={{
        click: () => {
          editarEstacion(e.name,e.description,e.nro);
          setIconCurrent(e);},
          dragstart() {
            if(!estaciones[i2].posicionOriginal)
              estaciones[i2].posicionOriginal=[estaciones[i2].lat,estaciones[i2].lng];
          },
          dragend() {
                estaciones[i2].lat=this._latlng.lat;
                estaciones[i2].lng=this._latlng.lng
                setLng(this._latlng.lng);
          }
        }}
        draggable={mover && (iconCurrent==e)}
        move={()=>{}}
      >

      </Marker>;

      return m;
    }



  useEffect(() => {
   IconosDetalle().then(x=>{
     let w=x.data.map(i=>{i['descriptionOriginal']=undefined;i['posicionOriginal']=undefined;return i;});
     setEstaciones(w);
//     console.log(w);
});
  }, []);


  function MyComponent() {
  const map = useMapEvents({
    click: () => {
      setIconCurrent(false);
    },

  })


  return null
}

const guardarDisabled=()=>{
  return (!(name!=iconCurrent.name||nro!=iconCurrent.nro||description!=iconCurrent.description||iconCurrent.posicionOriginal))||(name.length===0||nro.length===0||description.length===0);
}

async function eliminarEstacion(id) {
 return fetch('http://localhost:3800/estacion/id/'+id, {
   method: 'DELETE',
   headers: {
     'Content-Type': 'application/json'
   },
  })
   .then(data => data.json())
}

const eliminar=()=>{
  const token2 =  eliminarEstacion(iconCurrent.id)
  .then((d)=>{
    if(d.success){
      setModalTitle("Eliminacion de la estacion");
      setModalDetalle("Se ha eliminado la estacion seleccionada");
      setShow(true);
      setEstaciones(estaciones.filter(e=>e.id!=iconCurrent.id));
      setIconCurrent(false);
    }
  });
}

const nuevaEstacion=()=>{
  const centro=map.getCenter();
  estaciones.push({id:false,name:'',nro:'',description:'',estados:[],lat:centro.lat,lng:centro.lng});
  editarEstacion('','','');
  setIconCurrent(estaciones[estaciones.length-1])
}

const actualizar=()=> {
  async function actualizarEstacion(id,datos) {
   return fetch('http://localhost:3800/estacion/id/'+id, {
     method: 'PUT',
     headers: {'Content-Type': 'application/json'},
     body: JSON.stringify(datos)
   }).then(data => data.json())
  }

  const lat= iconCurrent.lat;
  const lng= iconCurrent.lng;
  const resultado =  actualizarEstacion(iconCurrent.id,{nro,name,description,lat,lng})
  .then((d)=>{
    if(d.success){
      setModalTitle("Cambios en la estacion");
      setModalDetalle("Se han actualizado los datos");
      setShow(true);
      const i=estaciones.findIndex(e=>e.id===iconCurrent.id);
      estaciones[i].nro=nro;
      estaciones[i].name=name;
      estaciones[i].description=description;
      estaciones[i].lat=lat;
      estaciones[i].lng=lng;

      setIconCurrent(false);
    }
  });

}

const descartar=()=>{
  if(!iconCurrent.id) {
    estaciones.pop();
  }
  else {
    if(iconCurrent.posicionOriginal){
      iconCurrent.lat=iconCurrent.posicionOriginal[0];
      iconCurrent.lng=iconCurrent.posicionOriginal[1];
    }

  }
  setIconCurrent(false);
}


const [show, setShow] = useState(false);
const handleClose = () => setShow(false);
const handleShow = () => setShow(true);
const [modalTitle,setModalTitle]=useState('')
const [modalDetalle,setModalDetalle]=useState('')


  return (
    <>

    <Container style={{background: "#8dadc8",color:"#073763",height:"100vh"}} fluid>
      <Modal
      show={show}
       onHide={handleClose}
        backdrop="static"
        keyboard={false}
        aria-labelledby="contained-modal-title-vcenter"
      centered>
        <Modal.Header closeButton>
        <Modal.Title>{modalTitle}</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <p>{modalDetalle}</p>
        </Modal.Body>
      </Modal>
      <Row style={{"margin-bottom":"3vh"}}>
        <Col>
          <Encabezado1 setToken={setToken}  token={token}/>
        </Col>
      </Row>
      <Row>
        <Col><div class="d-flex justify-content-center">
        <h1>ADMINISTRACION DE LAS ESTACIONES</h1></div>
        </Col>
      </Row>
      <Row>

      <Col sm={4}>
      <Container>
        {iconCurrent && <Row><Col>Datos de la estacion
          <Form onSubmit={handleSubmit}>
            <Form.Label>Numero</Form.Label>
            <Form.Group className="mb-3" controlId="formBasicUsername">
              <Form.Control onChange={e => setNro(e.target.value)} value={nro}/>
            </Form.Group>
            <Form.Label>Nombre</Form.Label>
            <Form.Group className="mb-3" controlId="formBasicUsername">
              <Form.Control  onChange={e => setName(e.target.value)} value={name}/>
            </Form.Group>
            <Form.Label>Ubicacion</Form.Label>
            <Form.Group className="mb-3" controlId="formBasicUsername">
              <Form.Control onChange={e => {setDescription(e.target.value);}} value={description}/>
            </Form.Group>
              <Row><Col><input type="checkBox" defaultChecked={mover} onChange={()=>setMover(!mover)}/>Mover estacion</Col></Row>
              <Row><Col>Posicion Actual</Col></Row>
              <Row><Col>lat</Col><Col>{iconCurrent.lat}</Col></Row>
              <Row><Col>lng:</Col><Col>{iconCurrent.lng}</Col></Row>
              <Row>
                <Col><Button disabled={guardarDisabled()} type="submit"><FaRegThumbsUp/> Guardar</Button></Col>
                <Col><Button onClick={()=>descartar()}><FaRegThumbsDown/> Descartar</Button></Col>
                {iconCurrent.id &&
                  <Col><Button  variant="danger" onClick={()=>eliminar()}><GoAlert/> Eliminar</Button></Col>}
              </Row>

          </Form>
        </Col></Row>}
        {!iconCurrent && <>
          <Row style={{'margin-top':"2vh"}}><Col><Button onClick={nuevaEstacion}><FaPlusSquare/> Nueva estacion</Button></Col></Row>
          <Row style={{'margin-top':"2vh"}}><Col><Link  to={ "/usuarios"} ><Button><FaUserFriends/> Editar datos Usuarios</Button></Link></Col></Row></>
        }

      </Container>
      </Col>
        <Col>
          <MapContainer  style={{width:"100%",position:"relative"}} center={[-34.905,-57.925]} zoom={12} zoomControl={true} whenCreated={setMap}>
            <TileLayer
              attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              url={maps.base}
            />
               {estaciones.map((e) =><Icono e={e} />)}
 <MyComponent />

            <MapConsumer>
              {(map) => {
                centro=map.getCenter();
                return null
              }}
            </MapConsumer>
          </MapContainer>


        </Col>
      </Row>
    </Container>
    </>
  );
};

export default Administracion;
