var Sequelize=require('sequelize');
var database=require('./database');

var EstacionesEstado=database.define('estacionesestado',{
  id:{
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  idEstacion: Sequelize.INTEGER,
  estadoLLuvia: Sequelize.INTEGER.UNSIGNED,
  estadoNivelCaudal: Sequelize.INTEGER.UNSIGNED,
  estadoBateria: Sequelize.INTEGER.UNSIGNED,
  mmLluvia: Sequelize.FLOAT,
  mmLluviaAcum: Sequelize.FLOAT,
  mmNivel: Sequelize.FLOAT,
  trBateria: Sequelize.FLOAT,
  fechaDatos: { type: Sequelize.DATE, defaultValue: Sequelize.fn('now'), allowNull: false },
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

module.exports=EstacionesEstado;
