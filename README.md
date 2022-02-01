# Proyecto de Habilitacion Profesional

### Sistema de acceso a los datos.

Realizado en React Js

### Pasos para la instalacion luego de descargar el proyecto:

- [ ] npm install
- [ ] npm run dev

Nota: el script **dev** realiza el arranque simultaneo del servidor de datos, en el puerto **3800**, y del front en el puerto **3000**. Para poder correrlos por separado, seria:

- npm run server    -> Arranca solo el servicio de API
- npm run client    -> Arranca solo el front

Para inicializar el sistema es necesario tener instalado un servidor MySql y crear una base de datos denomianda: **habilitacion**

La configuracion del acceso a la base de datos se encuentra en el siguiente archivo: model/database.js

```
const database=new Sequelize (.
  'habilitacion',                 //Base de datos.
  'usuario',                      //Usuario.
  'clave',                        //Clave.
  {
    host: 'localhost',            //Host del servidor
    dialect: 'mysql'              //Motor de base de datos 
  } 
);
```

Al momento de inicial el servidor, se crearan las tablas vacias:
```
usuarios
estaciones
estacionesestados
```

### El sistema trabaja con API, la api para actualizacion de la las estaciones es la siguiente:

```
METODO: POST
IP: localhost:3800/estacion/agregarEstado/<numero de la estacion>
HEADER: Content-Type: application/json
BODY: {
  "estadoNivelCaudal":  <valor de 0 a 4>,
  "estadoBateria":      <valor de 4 a 0>,
  "estadoLLuvia":       <valor de 0 a 4>,
  "mmLluvia":           <valor expresado en mm>,
  "mmNivel":            <valor expresado en mm>,
  "trBateria":          <valor expresando el porcentaje de bateria actual de 0 a 100>
 }
```

dicha API se encargara de colocar un nuevo estado en la estacion correspondiente. Para las pruebas se utilizo RESTer (complemento del firefox)

### El sistema tiene dos modos de acceso:
- Visualizacion de los datos generados por las estaciones: se accede con una cuenta de usuario activa
- Administracion de las estaciones y los usuarios: se accede con el usuario **admin@admin.com** y clave **admin**
