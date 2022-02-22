import React, { useEffect, useState, useRef,forwardRef } from "react";
import {Container,Row,Col,Dropdown,Table,ButtonGroup} from 'react-bootstrap';
import Encabezado1 from '../components/Encabezado1';
import {Button,Stack} from 'react-bootstrap';
import {useParams,useNavigate } from 'react-router-dom';
import { RiCheckboxFill, RiAlertFill,RiShowersFill } from "react-icons/ri";
import { BsWater } from "react-icons/bs";
import Actual from '../components/Actual';
import Estadistica from '../components/Estadistica';
import SolicitarDatos from '../components/SolicitarDatos';
import SocketClient from "../components/SocketClient";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Moment from 'moment';
import ReactExport from "react-export-excel";
import jsPDF from 'jspdf'
import 'jspdf-autotable'

const ExcelFile = ReactExport.ExcelFile;
const ExcelSheet = ReactExport.ExcelFile.ExcelSheet;
const ExcelColumn = ReactExport.ExcelFile.ExcelColumn;


// Import the JS and CSS:
const TituloLluvia=()=>{return (<h1>PRECIPITACIONES <RiShowersFill/></h1>)};
const TituloNivel=()=>{return (<h1>DETALLE NIVEL DE AGUA <BsWater/></h1>)};

const Detalle = ({setToken,token,por}) => {

  const { id } = useParams();

  const [estacion, setEstacion] = useState([]);
  const [estados,setEstados]=useState([]);
  const [unEstado, setUnEstado] =useState(undefined);
  const [estadoActual, setEstadoActual] =useState(undefined);
  const [verHistorico, setVerHistorico] =useState(false);
  const [cantidad,setCantidad]=useState('Seleccionar');
  const [criterio,setCriterio]=useState('Seleccionar');
  const [seleccion,setSeleccion]=useState(0);
  useEffect(()=>{
    if(unEstado) {
      let es=estados;
      es.unshift(unEstado);
      es.slice(0, 10);
      setEstados(es);
      setEstadoActual(unEstado);
    }
  },[unEstado])

  let navigate = useNavigate();

  useEffect(() => {
   SolicitarDatos('estacion/ultimos5/id/'+id).then(x=>{setEstacion(x.data[0]);setEstados(x.data[0].estados);setEstadoActual(x.data[0].estados[0]);});
  }, []);


  const Ingreso = forwardRef(({ value, onClick }, ref) => (<button className="ingreso" onClick={onClick} ref={ref}>{value}</button>));

  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  const [datosHistoricos,setDatosHistoricos]=useState([]);
  const contenido=datosHistoricos.map((d,i)=><tr><td>{i+1}</td><td>{Moment(d.fechaDatos).format('D-MM-YYYY')}</td><td>{Moment(d.fechaDatos).format('hh:mm:s')}</td><td>{(por=='lluvia')?d.mmLluviaAcum:d.mmNivel}</td></tr>);
  const contenido2 = datosHistoricos.map(elt=> [Moment(elt.fechaDatos).format('D-MM-YYYY'),Moment(elt.fechaDatos).format('hh:mm:s'), (por=='lluvia')?elt.mmLluviaAcum:elt.mmNivel]);


const DatosHistoricosRango= async() => {
  return await fetch('http://localhost:3800/estacion/byRango/'+id+'/'+Moment(startDate).format('YYYY-MM-D')+'/'+Moment(endDate).format('YYYY-MM-D'), {
    method: 'GET',headers: {'Content-Type': 'application/json'},})
    .then(data => data.json())
}
const DatosHistoricosCriterio= async() => {
  return await fetch('http://localhost:3800/estacion/byCriterio/'+id+'/'+cantidad+'/'+criterio+'lluvia', {
    method: 'GET',headers: {'Content-Type': 'application/json'},})
    .then(data => data.json())
}
const ConsultarHistoricos=()=>{
    if(seleccion==1) DatosHistoricosCriterio().then(x=>setDatosHistoricos(x.data));
    if(seleccion==2) DatosHistoricosRango().then(x=>setDatosHistoricos(x.data));
}





const exportPDF = () => {
    const unit = "pt";
    const size = "A4"; // Use A1, A2, A3 or A4
    const orientation = "portrait"; // portrait or landscape

    const marginLeft = 40;
    const doc = new jsPDF(orientation, unit, size);

    doc.setFontSize(15);

    const title = "Reposte de datos seleccionados";
    const headers = [["Fecha","Hora", "Valor"]];

//    const data = datosHistoricos.map(elt=> [Moment(elt.fechaDatos).format('D-MM-YYYY'),Moment(elt.fechaDatos).format('hh:mm:s'), elt.mmLluvia]);

    let content = {
      startY: 50,
      head: headers,
      body: contenido2
    };

    doc.text(title, marginLeft, 40);
    doc.autoTable(content);
    doc.save("report.pdf")
  }




  return (
    <>
    <Container style={{background: "#8dadc8",color:"#073763",height:"100vh"}} fluid>
      <Row  style={{"margin-bottom":"3vh"}}>
        <Col >
          <Encabezado1 setToken={setToken}  token={token}/>
        </Col>
      </Row>
      <Row >
        <Col  sm={8}>{por=='lluvia'?<TituloLluvia/>:<TituloNivel/>}</Col><Col sm={4}><Button onClick={()=>navigate(-1)}>Volver al Panel General</Button></Col>
      </Row>
      <Row>
        <Col sm={3}><h3>Estacion n°: {id} </h3></Col>
        <Col sm={9}><h3>Denominacion: {estacion.name} </h3></Col>
      </Row>
      <Row><Col><h3>Ubicacion: {estacion.description}</h3></Col></Row>
      {!verHistorico &&
      <Row className="justify-content-md-center">
        <Col >
        {estadoActual &&
          <Actual estado={estadoActual} seleccionNivel={por=='lluvia'?'estadoLLuvia':'estadoNivelCaudal'} seleccionValor={por=='lluvia'?'mmLluviaAcum':'mmNivel'}/> }
        </Col>
        <Col >
        {estadoActual &&
          <Estadistica estados={estados} seleccionNivel={por=='lluvia'?'estadoLLuvia':'estadoNivelCaudal'} seleccionValor={por=='lluvia'?'mmLluviaAcum':'mmNivel'}/> }
        <br/>
        <Button onClick={()=>setVerHistorico(true)}>Ver HISTORICO</Button>
        </Col>

      </Row>}
      {verHistorico &&
        <Container>
      <Row style={{"justify-content":"space-around","margin":"10px"}}>
        <Col style={{"border-radius": "25px","border": "solid 2px","margin":"10px","padding":"10px"}}>
        <h4><input type="radio" value="Criterio" name="usar" checked={seleccion === 1} onChange={()=>setSeleccion(1)}/> Criterio</h4>
        <Container>
          <Row>
            <Col>
              <Dropdown>
                <nobr>{cantidad} <Dropdown.Toggle split variant="success" id="dropdown-split-basic" /></nobr>
                <Dropdown.Menu>
                  <Dropdown.Item onClick={()=>setCantidad(5)}>5</Dropdown.Item>
                  <Dropdown.Item onClick={()=>setCantidad(10)}>10</Dropdown.Item>
                  <Dropdown.Item onClick={()=>setCantidad(15)}>15</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Col>
            <Col>
            <Dropdown>
              <nobr>{criterio} <Dropdown.Toggle split variant="success" id="dropdown-split-basic" /></nobr>
              <Dropdown.Menu>
                <Dropdown.Item onClick={()=>setCriterio('Primeros')}>Primeros</Dropdown.Item>
                <Dropdown.Item onClick={()=>setCriterio('Ultimos')}>Ultimos</Dropdown.Item>
                <Dropdown.Item onClick={()=>setCriterio('Minimos')}>Minimos</Dropdown.Item>
                <Dropdown.Item onClick={()=>setCriterio('Maximos')}>Maximos</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            </Col>
          </Row>
        </Container>

        </Col>
        <Col style={{"border-radius": "25px","border": "solid 2px","margin":"10px","padding":"10px"}}>
          <h4><input type="radio" value="Rango" name="usar" checked={seleccion === 2} onChange={()=>setSeleccion(2)}/> Rango</h4>
          <Container>
            <Row><Col><nobr>Desde&nbsp;
              <DatePicker style={{"max-width":"10vw","min-width": "75px"}}
                selected={startDate}
                onChange={(date) => setStartDate(date)}
                dateFormat="dd/MM/yyyy"
                selectsStart
                startDate={startDate}
                endDate={endDate}
                customInput={<Ingreso />}
              /></nobr></Col></Row>
            <Row><Col style={{"max-width":"10vw","min-width": "75px"}}><nobr>Hasta&nbsp;&nbsp;
              <DatePicker
                selected={endDate}
                onChange={(date) => setEndDate(date)}
                dateFormat="dd/MM/yyyy"
                selectsEnd
                startDate={startDate}
                endDate={endDate}
                minDate={startDate}
                customInput={<Ingreso />}
              /></nobr></Col></Row>
          </Container>
        </Col>
        <Col  className="mx-auto" style={{"display": "flex","justify-content":"center","margin":"10px","padding":"10px"}}>
          <Button onClick={()=>ConsultarHistoricos()}
            disabled={(
              seleccion==0)||
              (seleccion==1&&(cantidad=='Seleccionar'||criterio=='Seleccionar'))} >
          Consultar</Button></Col>
      </Row>
      <Row>
      <Col>
      <Table striped bordered hover>
        <thead>
          <tr><th>#</th><th>Fecha</th><th>Hora</th><th>Valor (mm/h)</th></tr>
        </thead>
        <tbody>
          {contenido}
        </tbody>
</Table></Col>
      </Row>
      <Row >
        <Col style={{"justify-content":"space-around","display":"flex"}}>
          <Button onClick={() => exportPDF()}>Exportar PDF</Button></Col>
        <Col style={{"justify-content":"space-around","display":"flex"}}>
        <ExcelFile element={<Button>Exportar a EXCEL</Button>}>
            <ExcelSheet data={contenido2} name="Precipitaciones">
                <ExcelColumn label="Fecha" value="0"/>
                <ExcelColumn label="Hora" value="1"/>
                <ExcelColumn label="Valor" value="2"/>
            </ExcelSheet>
        </ExcelFile>
        </Col>
        <Col style={{"justify-content":"space-around","display":"flex"}}><Button onClick={()=>setVerHistorico(false)}>Volver</Button></Col>
      </Row>
      </Container>



      }
      <SocketClient cambioEstado={setUnEstado} idEstacion={id} />
    </Container>
    </>
  );
};

export default Detalle;
