import React from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Login from './pages/login';
import QES from './pages/QES';
import Funcionalidades from './pages/Funcionalidades';
import Seleccion3 from './pages/Seleccion3';
import PanelGral from './pages/PanelGral';
import NivelAguaDetalle from './pages/NivelAguaDetalle';
import PrecipitacionesDetalle from './pages/PrecipitacionesDetalle';
import SolicitarCuenta from './pages/SolicitarCuenta';
import RecuperoClave from './pages/RecuperoClave';

import useToken from './components/useToken';
import './App.css';

function App() {
  const { token, setToken } = useToken();

  return (
    <BrowserRouter>
      <Routes>
        {!token && <Route path="/" element={<Login setToken={setToken}  token={token}/>} /> }
        {token && <Route path="/" element={<Seleccion3 setToken={setToken}  token={token}/>} />}
        {token && <Route path="/home" element={<Seleccion3 setToken={setToken}  token={token}/>} />}
        {token && <Route path='/estacion/:id' element={<PanelGral setToken={setToken} token={token}/>} />}
        {token && <Route path='/estacion/agua/:id' element={<NivelAguaDetalle setToken={setToken} token={token}/>} />}
        {token && <Route path='/estacion/lluvia/:id' element={<PrecipitacionesDetalle setToken={setToken} token={token}/>} />}
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
