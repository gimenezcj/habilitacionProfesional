var Sequelize = require('sequelize');

const database=new Sequelize (
  'habilitacion',
  'javier',
  'jjjj',
  {
    host: 'localhost',
    dialect: 'mysql'
  }
);

database.sync();

module.exports=database;
