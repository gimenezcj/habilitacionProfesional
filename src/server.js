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
  req.body.fechaDatos=Date.now();
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
