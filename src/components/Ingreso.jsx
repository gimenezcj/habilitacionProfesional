import React,{ useState } from "react";
import PropTypes from 'prop-types';
import {Form,Button,Nav} from 'react-bootstrap';

async function loginUser(credentials) {

 return fetch('http://localhost:3800/usuario/login', {
   method: 'POST',
   headers: {
     'Content-Type': 'application/json'
   },
   body: JSON.stringify(credentials)
 })
   .then(data => data.json())
}

function Ingreso ({ setToken,token }) {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = async e => {
   e.preventDefault();
   const token2 = await loginUser({
     email,
     password
   });
   setToken(token2);
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control  placeholder="email" onChange={e => setEmail(e.target.value)} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Control type="password" placeholder="Clave" onChange={e => setPassword(e.target.value)}/>
      </Form.Group>

      <Button style={{position:'absolute'}} variant="primary" type="submit" className="mb-3" >
        Acceder
      </Button>

      
 
<div style={{textAlign:'right'}} > <li><a  href="/RecuperoClave" style={{fontSize:'14px'}}>  Olvide mi contraseña </a> </li> 
      <li> <a  href="/NuevaCuenta" style={{fontSize:'14px'}}>   No tenes cuenta de usuario? Solicitala </a></li>

</div>

      
      {/* <div style="text-align: center;">
    <button style="position: absolute;top: 50%;">Hello</button>
</div> */}

     

      {/* <Nav>
        <Nav.Item>
          <Nav.Link href="/RecuperoClave">Olvide mi contraseña</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/NuevaCuenta">No tenes cuenta de usuario? Solicitala </Nav.Link>
        </Nav.Item>
      </Nav> */}
    </Form>
  )
}

export default Ingreso;

Ingreso.propTypes = {
  setToken: PropTypes.func.isRequired
};
