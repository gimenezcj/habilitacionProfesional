import React from "react";
import {Nav,Image,Container,Row,Col} from 'react-bootstrap';
import { useNavigate } from "react-router-dom";
//import useToken from './useToken';

function Encabezado1 ({setToken,token}) {

  let navigate = useNavigate();

  async function logout() {
   return fetch('http://localhost:3800/usuario/logout', {
     method: 'GET',
     headers: {
       'Content-Type': 'application/json'
     },
   })
     .then(data => data.json())
  }

  const handleSubmit = async e => {
     const token = await logout();
   setToken(token);
   navigate("/", { replace: true });
  }
  const handleMap = async e => {
   navigate("/", { replace: true });
  }

  const icon =
    <span>
      <img src="/samca.png" width="80 px"/>
    </span>

  return (

    <Container>
<Row><Col md={2} style={{"display":"flex","align-items":"center"}}>{icon}</Col><Col md={10}>
    <Nav className="flex-row justify-content-end" activeKey="/home" onSelect={(selectedKey) =>{
      if(selectedKey==="1") handleSubmit();
      if(selectedKey==="2") handleMap();
    }}  >

      {token && <Image src={"/images/avatar/"+token.image } width="50px" roundedCircle thumbnail />}
      {token && <Nav.Link eventKey="3" disabled> {token.name}</Nav.Link>}
      {!token &&
        <>



          <Nav.Link href="/"> Home</Nav.Link>
          <Nav.Link href="/QES">Que es SAMCA</Nav.Link>
          <Nav.Link href="/Funcionalidades">Funcionalidades</Nav.Link>

          <Nav.Link eventKey="link-2">Contacto</Nav.Link>
        </>
      }
      {token && <>

        <Nav.Link eventKey="2">Mapa</Nav.Link>
        <Nav.Link eventKey="link-2">Ayuda</Nav.Link>
        <Nav.Link eventKey="1">Cerrar Sesion</Nav.Link>
      </> }

    </Nav>
    </Col>
    </Row>
    </Container>
  )
}

export default Encabezado1;
