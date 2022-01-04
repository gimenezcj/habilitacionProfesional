const SolicitarDatos= async(solicitud) => {
return await fetch('http://localhost:3800/'+solicitud, {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json'
  },
})
  .then(data => data.json())
}

export default SolicitarDatos;
