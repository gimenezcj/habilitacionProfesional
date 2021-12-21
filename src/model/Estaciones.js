var Sequelize=require('sequelize');
var database=require('./database');

var EstacionesEstado=require('./EstacionesEstado')

var Estaciones=database.define('estaciones',{
  id:{
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: Sequelize.STRING,
  description:Sequelize.STRING,
  lat: Sequelize.FLOAT,
  lng: Sequelize.FLOAT, 
});

Estaciones.hasMany(EstacionesEstado, {
  foreignKey: 'idEstacion',
  as: 'estados'});

module.exports=Estaciones;
