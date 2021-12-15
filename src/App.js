import React from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Login from './pages/login';
import QES from './pages/QES';
import Funcionalidades from './pages/Funcionalidades';
import Seleccion3 from './pages/Seleccion3';
import useToken from './components/useToken';
import './App.css';

function App() {
  const { token, setToken } = useToken();
//  if(!token) {
//    return <Login setToken={setToken} token={token}/>
//  }
  return (
    <BrowserRouter>
      <Routes>
        {!token && <Route path="/" element={<Login setToken={setToken}  token={token}/>} /> }
        {!token && <Route path="/home" element={<Login setToken={setToken}  token={token}/>} />}
        {token && <Route path="/" element={<Seleccion3 setToken={setToken}  token={token}/>} />}
        {token && <Route path="/home" element={<Seleccion3 setToken={setToken}  token={token}/>} />}
        <Route path="/QES" element={<QES setToken={setToken}  token={token}/>} />
        <Route path="/Funcionalidades" element={<Funcionalidades setToken={setToken}  token={token}/>} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
