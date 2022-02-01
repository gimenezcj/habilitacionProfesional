import React, { useEffect, useState, useRef } from "react";
import {Container,Row,Col,Form,Modal,Table,Image} from 'react-bootstrap';
import Encabezado1 from '../components/Encabezado1';

import {Button} from 'react-bootstrap';
import { Link } from 'react-router-dom';

import { FaUserFriends,FaRegThumbsDown,FaRegThumbsUp,FaPlusSquare } from "react-icons/fa";
import {GoAlert} from "react-icons/go";



const AdmUsuarios = ({setToken,token}) => {


const listado= async()=>{
  async function listarUsuarios() {
   return await fetch('http://localhost:3800/usuario/list', {method: 'GET',}).then(data => data.json())}
  const lista= listarUsuarios()
    .then((d)=>{if(d.success){setLista(d.data)}})
}

const [lista,setLista]=useState([]);

const contenido=lista.map((d,i)=>
  <tr><td>{i+1}</td>
  <td>{d.name}</td>
  <td>{d.email}</td>
  <td><Image src={"/images/avatar/"+d.image } width="50px" roundedCircle thumbnail /> {d.image}</td>
  <td>{d.isactive?"x":""}</td>
  <td>{d.isadmin?"x":""}</td>
  <td><Button variant="danger" onClick={()=>eliminar(d.id)}><GoAlert/> Eliminar</Button></td>
  </tr>);

useEffect(() => {listado()}, []);


  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [modalTitle,setModalTitle]=useState('')
  const [modalDetalle,setModalDetalle]=useState('')

  const eliminar=(id)=>{
    async function eliminarUsuario(id) {
     return await fetch('http://localhost:3800/usuario/'+id, {method: 'DELETE',}).then(data => data.json())}
     eliminarUsuario(id).then((d)=>{if(d.success)setLista(lista.filter(d=>d.id!=id));});
  }

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
        <h1>ADMINISTRACION DE USUARIOS</h1></div>
        </Col>
      </Row>
      <Row>
      <Col sm={4}>
      <Container>
      <Row style={{'margin-top':"8vh"}}><Col><Link to={ "/"}><Button><FaUserFriends/> Editar datos Estaciones</Button></Link></Col></Row>

      </Container>
      </Col>
      <Col>
      Listado de usuarios
      <Table striped bordered hover>
        <thead>
          <tr><th>#</th><th>Nombre</th><th>Email</th><th>Imagen</th><th>Activo</th><th>Admin</th><th>Acciones</th></tr>
        </thead>
        <tbody>
          {contenido}
        </tbody>
      </Table>
      </Col>

    </Row>
    </Container>
    </>
  );
};

export default AdmUsuarios;
