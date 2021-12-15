var Sequelize=require('sequelize');
var database=require('./database');

var Usuarios=database.define('usuarios',{
  id:{
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoincrement: true
  },
  name: Sequelize.STRING,
  email:Sequelize.STRING,
  password: Sequelize.STRING,
  image: Sequelize.STRING,
  token: Sequelize.STRING
});

module.exports=Usuarios;
