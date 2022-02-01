const express=require('express');
const routeEstacion=express();

const controllerEstacion = require('./../controller/EstacionController');

routeEstacion.get('/id/:id',controllerEstacion.get);
routeEstacion.get('/list',controllerEstacion.listAll);
routeEstacion.get('/ultimoestado/:id',controllerEstacion.ultimoEstado);
routeEstacion.get('/ultimos5/id/:id',controllerEstacion.getUltimos5);
routeEstacion.get('/byRango/:id/:desde/:hasta',controllerEstacion.getByRango);
routeEstacion.get('/byCriterio/:id/:cant/:criterio',controllerEstacion.getByCriterio);
routeEstacion.post('/create',controllerEstacion.create);
routeEstacion.delete('/id/:id',controllerEstacion.delete);
routeEstacion.put('/id/:id',controllerEstacion.update);


module.exports=routeEstacion;
