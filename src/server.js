const controllerEstacion = require('./controller/EstacionController');

const http = require("http");
const socketIo = require("socket.io");

const express=require('express');
var cors = require('cors')
const app=express();
//const path=require('path');

app.set('port', process.env.PORT || 3800);
app.use(cors());
app.use(express.json());



///app.get('/',(req,res)=>{
///  res.send("Hola mundo desde NodeJS express");
///});



const route=require('./routes/api');
app.use('/usuario',route);

const routeEstacion=require('./routes/apiEstacion');
app.use('/estacion',routeEstacion);

const index = require("./routes/index");
app.use(index);

var server=app.listen(app.get('port'),()=>{
  console.log("Servidor iniciado en el puerto "+app.get('port'));
});

//const server = http.createServer(app);



const io = socketIo(server,{  cors: {    origin: "http://localhost:3000",    methods: ["GET", "POST"],    allowedHeaders: ["idEstacion"],    credentials: true  }});

let interval;
let sockets= new Map();



io.on("connection", (socket) => {
  console.log("New client connected");
//  if (interval) {
//    clearInterval(interval);
//  }npm install moment --save
  let idEstacion = socket.handshake.query['idEstacion'];

  if(sockets.has(idEstacion))
   {
     let aux=sockets.get(idEstacion);
     aux.push(socket);
   }
  else
    sockets.set(idEstacion,[socket]);

  console.log("Desde la estacion: " +idEstacion);

// sockets[idEstacion]=socket;
//  interval = setInterval(() => getApiAndEmit(socket,idEstacion), 1000);
  socket.on("disconnect", () => {
    console.log("Client disconnected");
    let aux=sockets.get(idEstacion);
    let aux2=aux.filter(e=>{return e!=socket});
    sockets.set(idEstacion,aux2);
//    clearInterval(interval);
  });
});

const getApiAndEmit = (socket,idEstacion) => {
  const response = new Date();
  // Emitting a new message. Will be consumed by the client
  socket.emit("FromAPI", response);
};


const agregarEstado=async (req,res)=>{
  const {id}=req.params;
  req.body.idEstacion=id;
  if(req.body.fechaDatos==undefined) req.body.fechaDatos=Date.now();
  controllerEstacion.nuevoEstado(req,res)
  .then(()=>{
    let lista=sockets.get(id);
    lista.forEach(socket=>{
      socket.emit("FromAPI",req.body);
      //console.log(res);
    })
  });

}

app.post('/estacion/agregarEstado/:id',agregarEstado);

//Accedemos a los datos del servidor y actualizamos algo

const https = require('https');
//const http = require('http');


const options = {
  hostname: 'samcautn.000webhostapp.com',
  path: '/prueba.php',
}

function EnviarDatos(data) {
  var postData = JSON.stringify(data);

  var options = {
    hostname: 'localhost',
    port: 3800,
    path: '/estacion/agregarEstado/'+data.idEstacion,
    method: 'POST',
    headers: {
         'Content-Type': 'application/json',
         'Content-Length': postData.length
       }
  };
  const req = http.request(options, (res) => {
      let data2 = '';

//      console.log('Status Code:', res.statusCode);

      res.on('data', (chunk) => {
          data2 += chunk;
      });

      res.on('end', () => {
          console.log('Body: ', JSON.parse(data2));
      });

  }).on("error", (err) => {
      console.log("Error: ", err.message);
  });

  req.write(postData);
  req.end();

}

 setInterval(()=>{

   const req = https.request(options, res => {
   //  console.log(`statusCode: ${res.statusCode}`)
     let data = '';


     res.on('data', d => {
   //    process.stdout.write(d)
       data += d;
     });
     res.on('end', () => {
       d2=JSON.parse(data);
       if(d2.length!=0){
         d2.forEach(e=>{
           na=(1000-e.nivelAgua);na2=(na<0?0:(na>1000?1000:na));na3=(na2/270*4);na4=(na3>4?4:na3);
           nl=parseInt(e.precipitacionAcum/300*4);nl2=(nl>4?4:nl);
           datos={
             "fechaDatos":e.fecha,
             "idEstacion":e.estacion,
             "estadoLLuvia":nl2,
             "estadoNivelCaudal": parseInt(na4),
             "estadoBateria":parseInt(e.bateria/14*4),
             "mmLluvia":e.precipitacion,
             "mmLluviaAcum":e.precipitacionAcum,
             "mmNivel":na2,
             "trBateria":e.bateria,
           };
           EnviarDatos(datos);
         });
       }
//else console.log("NADA");

   });
   })

   req.on('error', error => {
     console.error(error)
   })

   req.end()
},20000);
