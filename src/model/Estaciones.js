var Sequelize=require('sequelize');
var database=require('./database');

var EstacionesEstado=require('./EstacionesEstado')

var Estaciones=database.define('estaciones',{
  id:{
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  nro: {
    type: Sequelize.INTEGER,
    allowNull: false,
    unique: true
  },
  name: Sequelize.STRING,
  description:Sequelize.STRING,
  lat: Sequelize.FLOAT,
  lng: Sequelize.FLOAT,
  createdAt: {
    allowNull: false,
    defaultValue: Sequelize.fn('now'),
    type: Sequelize.DATE
  },
  updatedAt: {
    allowNull: false,
    defaultValue: Sequelize.fn('now'),
    type: Sequelize.DATE
  }
});

Estaciones.hasMany(EstacionesEstado, {
  foreignKey: 'idEstacion',
  as: 'estados'});

module.exports=Estaciones;
