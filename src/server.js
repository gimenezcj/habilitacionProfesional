const express=require('express');
var cors = require('cors')
const app=express();
//const path=require('path');

app.set('port', process.env.PORT || 3800);

app.use(express.json());
app.use(cors());


app.get('/',(req,res)=>{
  res.send("Hola mundo desde NodeJS express");
});

app.listen(app.get('port'),()=>{
  console.log("Servidor iniciado en el puerto "+app.get('port'));
});

const route=require('./routes/api');
app.use('/usuario',route);
