var Sequelize = require('sequelize');

const database=new Sequelize (
  'habilitacion',
  'julieta',
  'jjjj',
  {
    host: 'localhost',
    dialect: 'mysql'
  }
);

database.sync();

module.exports=database;
