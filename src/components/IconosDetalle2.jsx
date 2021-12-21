 const IconosDetalle= async() => {
 return await fetch('http://localhost:3800/estacion/list', {
   method: 'GET',
   headers: {
     'Content-Type': 'application/json'
   },
 })
   .then(data => data.json())
}

export default IconosDetalle;
