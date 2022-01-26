const express=require('express');
const route=express();

const controller = require('./../controller/UsuarioController');

route.get('/index',controller.index);
route.get('/list',controller.listAll);
route.post('/login',controller.login);
route.get('/logout',controller.logout);
route.post('/create',controller.create);
route.post('/regenPassword',controller.regenPassword);

module.exports=route;
