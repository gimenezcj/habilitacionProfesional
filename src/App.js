import React from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Login from './pages/login';
import QES from './pages/QES';
import Funcionalidades from './pages/Funcionalidades';
import Seleccion3 from './pages/Seleccion3';
import PanelGral from './pages/PanelGral';
import SolicitarCuenta from './pages/SolicitarCuenta';
import RecuperoClave from './pages/RecuperoClave';
import Detalle from './pages/Detalle';
import Administracion from './pages/Administracion';
import AdmUsuarios from './pages/AdmUsuarios';

import useToken from './components/useToken';
import './App.css';

function App() {
  const { token, setToken } = useToken();

  return (
    <BrowserRouter>
      <Routes>
        {(token && token.isadmin) && <>
          <Route path='/' element={<Administracion setToken={setToken}  token={token} />} />
          <Route path='/home' element={<Administracion setToken={setToken}  token={token} />} />
          <Route path='/usuarios' element={<AdmUsuarios setToken={setToken}  token={token} />} />
        </>}
        {(token && !token.isadmin) && <>
          <Route path="/" element={<Seleccion3 setToken={setToken}  token={token}/>} />
          <Route path="/home" element={<Seleccion3 setToken={setToken}  token={token} />} />
          <Route path='/estacion/:id' element={<PanelGral setToken={setToken} token={token}/>} />
          <Route path='/estacion/agua/:id' element={<Detalle setToken={setToken} token={token}  por="nivel"/>} />
          <Route path='/estacion/lluvia/:id' element={<Detalle setToken={setToken} token={token} por="lluvia"/>} />
          </>
        }

        {!token && <Route path="/" element={<Login setToken={setToken}  token={token}/>} /> }
        <Route path="/NuevaCuenta" element={<SolicitarCuenta setToken={setToken}  token={token}/>}/>
        <Route path="/QES" element={<QES setToken={setToken}  token={token}/>} />
        <Route path="/Funcionalidades" element={<Funcionalidades setToken={setToken}  token={token}/>} />
        <Route path="/RecuperoClave" element={<RecuperoClave setToken={setToken}  token={token}/>} />

        <Route render={() => <h1>Not found!</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
