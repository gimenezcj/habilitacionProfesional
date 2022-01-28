var Sequelize = require('sequelize');

const database=new Sequelize (
  'habilitacion',
  'javier',
  'j',
  {
    host: 'localhost',
    dialect: 'mysql'
  }
);

database.sync();

module.exports=database;
