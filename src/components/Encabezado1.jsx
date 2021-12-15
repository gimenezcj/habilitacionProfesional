import React from "react";
import {Nav,Image,Container} from 'react-bootstrap';
//import useToken from './useToken';

function Encabezado1 ({setToken,token}) {

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
  }

  return (
    <Nav className="flex-row justify-content-md-center" activeKey="/home" onSelect={(selectedKey) =>{
      if(selectedKey==="1") handleSubmit();
    }}>
      {token && <Image src="images/avatar/javier.jpg" width="50px" roundedCircle thumbnail />}
      {token && <p style={{'margin-top':'1'}}> Javier Gimenez </p>}
      {!token &&
        <>
          <Nav.Link href="/QES">Que es SAMCA</Nav.Link>
          <Nav.Link href="/Funcionalidades">Funcionalidades</Nav.Link>
        </>
      }
      {token && <>
        <Nav.Link eventKey="1">Cerar Sesion</Nav.Link>
        <Nav.Link eventKey="link-2">Ayuda</Nav.Link>
      </> }
        <Nav.Link eventKey="link-2">Contacto</Nav.Link>
    </Nav>
  )
}

export default Encabezado1;
