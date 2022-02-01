var Sequelize=require('sequelize');
var database=require('./database');

var Usuarios=database.define('usuarios',{
  id:{
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  email:{
    type:Sequelize.STRING,
    unique: true,
    validate: {
      isEmail: true,
    },
    allowNull: false,
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  image: {
    type:Sequelize.STRING,
    defaultValue: "default.png"},
  token: {
    type:Sequelize.STRING,
    allowNull: true,
  },
  isadmin: {
    type:Sequelize.BOOLEAN,
    defaultValue: false,
    allowNull: false,
  },
  isactive: {
    type:Sequelize.BOOLEAN,
    defaultValue: false,
    allowNull: false,
  },
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

module.exports=Usuarios;
