const express=require('express');
const route=express();

const controller = require('./../controller/UsuarioController');

route.get('/index',controller.index);
route.get('/list',controller.listAll);
route.post('/login',controller.login)
route.get('/logout',controller.logout)

module.exports=route;
