import React from "react";
import {Nav,Image} from 'react-bootstrap';
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
  return (
    <Nav className="flex-row justify-content-end" activeKey="/home" onSelect={(selectedKey) =>{
      if(selectedKey==="1") handleSubmit();
      if(selectedKey==="2") handleMap();
    }}>
      {token && <Image src="/images/avatar/javier.jpg" width="50px" roundedCircle thumbnail />}
      {token && <Nav.Link eventKey="3" disabled> Javier Gimenez </Nav.Link>}
      {!token &&
        <>
          <Nav.Link href="/QES">Que es SAMCA</Nav.Link>
          <Nav.Link href="/Funcionalidades">Funcionalidades</Nav.Link>
          <Nav.Link eventKey="link-2">Contacto</Nav.Link>
        </>
      }
      {token && <>
        <Nav.Link eventKey="2">Mapa</Nav.Link>
        <Nav.Link eventKey="link-2">Ayuda</Nav.Link>
        <Nav.Link eventKey="1">Cerar Sesion</Nav.Link>
      </> }

    </Nav>
  )
}

export default Encabezado1;
