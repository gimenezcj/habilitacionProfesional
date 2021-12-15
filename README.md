Proyecto de Habilitacion Profecional

Sistema de acceso a los datos.

Realizado en React Js

Pasos para la instalacion luego de descargar el proyecto:

1) npm install
2) npm run dev

Nota: el script dev realiza el arranque simultaneo del servidor de datos, en el puerto 3800, y del front end. Para poder correrlos por separado, seria:

npm run server    -> Arranca solo el servicio de API
npm run client    -> Arranca solo el front


Configuracion del acceso a la base de datos:

El archivo que tiene los datos de configuracion es: model/database.js

const database=new Sequelize (
  'habilitacion',                 //Base de datos
  'javier',                       //Usuario
  'j',                            //Contraseña
  {
    host: 'localhost',            //Host del servidor
    dialect: 'mysql'              //Tipo de cliente
  }
);
