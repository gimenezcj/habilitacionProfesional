import React,{ useState }  from "react";
import {Form,Button,Nav,Container,Row,Col} from 'react-bootstrap';
import Encabezado1 from '../components/Encabezado1';

function validarEmail(e){
  let regEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return !regEmail.test(e);
//  return !! e.match(/.+@.+/);
}
async function crearCuenta(credentials) {

 return fetch('http://localhost:3800/usuario/create', {
   method: 'POST',
   headers: {
     'Content-Type': 'application/json'
   },
   body: JSON.stringify(credentials)
 })
   .then(data => data.json())
}
function SolicitarCuenta({ setToken,token }) {
  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [respuesta,setRespuesta] = useState("");

  const handleSubmit = async e => {
   e.preventDefault();
   const token2 = await crearCuenta({
     email,
     username,
     password
   });

   setRespuesta(token2);
  }

  console.log(respuesta);
  return (
    <Container style={{background: "#8dadc8",color:"#073763",height:"100vh"}}>
    <Row style={{"margin-bottom":"3vh"}}>
      <Col>
        <Encabezado1 setToken={setToken}  token={token}/>
      </Col>
    </Row>
    {!respuesta.usuarioCreado  &&
    <Row>
        <h2>Solicitud de una cuenta de acceso nueva</h2>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicUsername">
            <Form.Control  placeholder="Ingrese su nombre" onChange={e => setUserName(e.target.value)} />
            {(username.length<10) &&
            <Form.Text className="text-muted">
              El valor ingresado debe tener mas de 10 caracteres.
            </Form.Text>}
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control  placeholder="Ingrese un email valido" onChange={e => setEmail(e.target.value)} />
            {(validarEmail(email)) &&
            <Form.Text className="text-muted">
              Ingrese un email valido
            </Form.Text>}
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Control type="password" placeholder="Ingrese una clave de hasta 8 digitos" onChange={e => setPassword(e.target.value)}/>

            {(password && password.length>8) &&
            <Form.Text className="text-muted">
              La clave debe ser de hasta 8 caracteres.
            </Form.Text>}

          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Control type="password" placeholder="Reingrese la clave" onChange={e => setPassword2(e.target.value)}/>
            {(password!=password2) &&
            <Form.Text className="text-muted">
              Las claves no coinciden.
            </Form.Text>}
          </Form.Group>

          <Button variant="primary" type="submit" className="mb-3" disabled={((!password||!password2)||(password!=password2)||(password.length>8)||(username.length<10)||(validarEmail(email)))} >
            Crear cuenta nueva
          </Button>

        </Form>
    </Row>}
    {respuesta.usuarioCreado &&
    <Row>
      El usuario se ha creado y se le ha enviado un email para la validacion de su cuenta. Por favor haga click en el link -ACTIVAR CUENTA-. Gracias
    </Row>}
    </Container>
  );
}

export default SolicitarCuenta;
