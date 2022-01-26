import React,{ useState }  from "react";
import {Form,Button,Nav,Container,Row,Col} from 'react-bootstrap';
import Encabezado1 from '../components/Encabezado1';

function validarEmail(e){
  let regEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return !regEmail.test(e);
//  return !! e.match(/.+@.+/);
}
async function recuperaClave(credentials) {

 return fetch('http://localhost:3800/usuario/regenPassword', {
   method: 'POST',
   headers: {
     'Content-Type': 'application/json'
   },
   body: JSON.stringify(credentials)
 })
   .then(data => data.json())
}
function RecuperoClave({ setToken,token }) {
  const [email, setEmail] = useState("");
  const [respuesta,setRespuesta] = useState("");

  const handleSubmit = async e => {
   e.preventDefault();
   const token2 = await recuperaClave({email});

   setRespuesta(token2);
  }

  return (
    <Container style={{background: "#8dadc8",color:"#073763",height:"100vh"}}>
    <Row>
      <Col md={{ span: 6, offset: 6 }}>
        <Encabezado1 setToken={setToken}  token={token}/>
      </Col>
    </Row>
    {!respuesta &&
    <Row>
        <h2>Recupero de contraseña</h2>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control  placeholder="Ingrese un email con el que se ha registrado" onChange={e => setEmail(e.target.value)} />
            {(validarEmail(email)) &&
            <Form.Text className="text-muted">
              Ingrese un email valido
            </Form.Text>}
          </Form.Group>

          <Button variant="primary" type="submit" className="mb-3" disabled={!email||validarEmail(email)} >
            Obteber nueva clave
          </Button>

        </Form>
    </Row>}
    {respuesta.find &&
    <Row>El link para generar una nueva clave ha sido enviada por email al usuario {respuesta.data.name}
    </Row>}
    {respuesta.find==false &&
    <Row>El email no se encuentra registrado en el sistema.
  </Row>}
    </Container>
  );
}

export default RecuperoClave;
