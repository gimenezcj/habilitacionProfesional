import React,{ useState } from "react";
import PropTypes from 'prop-types';
import {Form,Button,Nav} from 'react-bootstrap';

async function loginUser(credentials) {
  console.log('login');
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
  const [username, setUserName] = useState();
  const [password, setPassword] = useState();


  const handleSubmit = async e => {
   e.preventDefault();
   const token2 = await loginUser({
     username,
     password
   });
   setToken(token2);

   console.log(token2);
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control  placeholder="Usuario" onChange={e => setUserName(e.target.value)} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Control type="password" placeholder="Clave" onChange={e => setPassword(e.target.value)}/>
      </Form.Group>

      <Button variant="primary" type="submit" className="mb-3" >
        Acceder
      </Button>

      <Nav className="flex-column">
        <Nav.Item>
          <Nav.Link href="/home">Olvide mi contraseña</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/home">No tenes cuenta de usuario? Solicitala</Nav.Link>
        </Nav.Item>
      </Nav>
    </Form>
  )
}

export default Ingreso;

Ingreso.propTypes = {
  setToken: PropTypes.func.isRequired
};
