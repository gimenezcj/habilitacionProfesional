const express=require('express');
const routeEstacion=express();

const controllerEstacion = require('./../controller/EstacionController');

routeEstacion.get('/id/:id',controllerEstacion.get);
routeEstacion.get('/list',controllerEstacion.listAll);
routeEstacion.get('/ultimoestado/:id',controllerEstacion.ultimoEstado);
routeEstacion.get('/ultimos5/id/:id',controllerEstacion.getUltimos5);


module.exports=routeEstacion;
