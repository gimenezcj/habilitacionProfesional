
const { Op } = require("sequelize");
const controller={}

var Estaciones=require('./../model/Estaciones');
var EstacionesEstado=require('./../model/EstacionesEstado');


controller.index=(reg,res)=>{
  const data ={
    name:'javier2',
    edad: 48
  }
  res.json(data);
}

controller.api = async(req,res)=>{
  const data={
    succes: true,
    message: 'Succesful'
  }
  res.json(data);
}

controller.nuevoEstado=async(req,res)=>{
  let estado={
    idEstacion: req.body.idEstacion,
    estadoLLuvia: req.body.estadoLLuvia,
    estadoNivelCaudal: 2,
    estadoBateria: 3,
    mmLluvia: 10,
    mmNivel: 20,
    trBateria: 30,
  };
  try {
    const nuevoEstado=await EstacionesEstado.create(req.body);
    if (nuevoEstado) {
      //console.log(nuevoEstado);
      res.json({ nuevoEstado });
  //    console.log(res);
    } else {
      res.status(500);
    }
//    res.json({
//        "message": "Product Created"
//    });
  } catch (e) {
    console.log('Error controller nuevoEstado');
    console.log(e);
  }
}


controller.ultimoEstado=async(req,res)=>{
  try {
    const {id}=req.params;
    const response= await EstacionesEstado.findAll({
      where: {idEstacion:id},
      order: [['fechaDatos', 'DESC'],],
      limit: 1,
      attributes: {  exclude:['id','idEstacion','createdAt','updatedAt']  }
    }).then(data=>{
      const res={success:true,message: 'carga exitosa', data:data}
      return res;
    })
    .catch(error=>{
      const res={success:false,error:error}
      return res;});
    return res.json(response);
  } catch (e) {
    console.log('Error controller UltimoEstado');
    console.log(e);
  }
}

controller.get=async(req,res)=>{
  try {
    const {id}=req.params;
      const response= await Estaciones.findByPk(id, {
        order: [['estados', 'fechaDatos', 'DESC'],],
        include: ['estados'],
        attributes: {  exclude:['createdAt','updatedAt']  }})
      .then(data=>{
        const res={success:true,message: 'carga exitosa', data:data}
        return res;
      })
      .catch(error=>{
        const res={success:false,error:error}
        return res;});
      return res.json(response);
  } catch (e) {
    console.log('Error controller listAll');
    console.log(e);
  }
}

controller.listAll=async(req,res)=>{
  try {
    const response=await Estaciones.findAll({
      include: [{
        model: EstacionesEstado,
        as:'estados',
        attributes:['estadoLLuvia','estadoNivelCaudal','estadoBateria','fechaDatos'],limit: 2,order:[['fechaDatos','DESC']]
      }],
      attributes: {  exclude:['createdAt','updatedAt']  },
    })
    .then((data)=>{
      const res={success:true,message: 'carga exitosa', data:data}
      return res;})
    .catch(error=>{
      const res={success:false,error:error}
      return res;});
    return res.json(response);
  } catch (e) {
    console.log('Error controller listAll');
    console.log(e);
  }
}

controller.login=async(req,res)=>{
  try {
    const data={
      succes: true,
      message: 'Succesful',
      token:'1222',
    }
    res.json(data);
  } catch (e) {
    console.log('Error controller login');
    console.log(e);
  }
}

controller.logout=async(req,res)=>{
  try {
    const data={
      succes: true,
      message: 'Succesful',
    }
    res.json(data);
  } catch (e) {
    console.log('Error controller logout');
    console.log(e);
  }
}

controller.getUltimos5=async(req,res)=>{
  try {
    const {id}=req.params;
      const response= await Estaciones.findAll( {
        where: {id:id},
        include: [{
          model: EstacionesEstado,
          as:'estados',
          attributes:['estadoLLuvia','estadoNivelCaudal','estadoBateria','mmLluvia','mmNivel','trBateria','fechaDatos'],limit: 5,order:[['fechaDatos','DESC']]
        }],
        attributes:['name','description','lat','lng'],
      })
      .then(data=>{
        const res={success:true,message: 'carga exitosa', data:data}
        return res;
      })
      .catch(error=>{
        const res={success:false,error:error}
        return res;});
      return res.json(response);
  } catch (e) {
    console.log('Error controller listAll');
    console.log(e);
  }
}

controller.getByRango=async(req,res)=>{
  const {id,desde,hasta}=req.params;
  try {
    console.log(id,desde,hasta);
    const response= await EstacionesEstado.findAll({
      where: {idEstacion:id,fechaDatos: {[Op.between]: [desde, hasta]}},
      order: [['fechaDatos', 'DESC'],],
      attributes: {  exclude:['id','idEstacion','createdAt','updatedAt']  }
    })
    .then(data=>{
      const res={success:true,message: 'carga exitosa', data:data}
      return res;
    })
    .catch(error=>{
      const res={success:false,error:error}
      return res;});
    return res.json(response);
  } catch (e) {
    console.log('Error controller UltimoEstado');
    console.log(e);
  }
}

controller.getByCriterio=async(req,res)=>{
  const {id,cant,criterio}=req.params;
  try {
    console.log(id,cant,criterio);
    if(criterio.substring(0, 7)=='Ultimos') order=[['fechaDatos', 'DESC'],];
    if(criterio.substring(0, 8)=='Primeros') order=[['fechaDatos', 'ASC'],];
    if(criterio=='Minimoslluvia') order=[['mmLluvia', 'ASC'],];
    if(criterio=='Maximoslluvia') order=[['mmLluvia', 'DESC'],];
    if(criterio=='Minimosnivel') order=[['mmNivel', 'ASC'],];
    if(criterio=='Maximosnivel') order=[['mmNivel', 'DESC'],];
    const response= await EstacionesEstado.findAll({
      where: {idEstacion:id},
      order: order,
      limit: cant*1,
      attributes: {  exclude:['id','idEstacion','createdAt','updatedAt']  }
    })
    .then(data=>{
      const res={success:true,message: 'carga exitosa', data:data}
      return res;
    })
    .catch(error=>{
      const res={success:false,error:error}
      return res;});
    return res.json(response);
  } catch (e) {
    console.log('Error controller UltimoEstado');
    console.log(e);
  }
}

controller.create=async(req,res)=>{
  const {nro,name,description,lat,lng}=req.body;
  try {
    const response=await Estaciones.create({
      nro:nro,
      name:name,
      description:description,
      lat:lat,
      lng:lng,
    })
    .then((data)=>{
      return {success:true,estacionCreada: true, data:data};
    })
    .catch(error=>{
      const res={success:false,estacionCreada:false,error:error}
      return res;});
      return res.json(response);
  } catch (e) {
    response={success:false,estacionCreada:false,error:'Error al crear la estacion'}
//    console.log('Error al crear al usuario');
//    console.log(e);
    return res.json(response);
  }

}

controller.delete=async(req,res)=>{
  const {id}=req.params;
  try {
    const response=await Estaciones.destroy({where: {id:id}})
    .then((n)=>{
      if(n===1)
        return {success:true,estacionEliminada: true, data:n};
      else
        return {success:false,estacionEliminada: false, data:n};
    })
    .catch(error=>{
      const res={success:false,estacionEliminada:false,error:error}
      return res;});
      return res.json(response);
  } catch (e) {
    response={success:false,estacionEliminada:false,error:'Error al eliminar la estacion'}
    return res.json(response);
  }
}

controller.update=async(req,res)=>{
  const {id}=req.params;
  const {nro,name,description,lat,lng}=req.body;
  try {
    const response=await Estaciones.update(
      {name:name,nro:nro,description:description,lat:lat,lng:lng},
      {where: {id:id}})
    .then((d)=>{
      return {success:true,estacionModificada: true, data:d};
    })
    .catch(error=>{
      const res={success:false,estacionModificada:false,error1:error}
      return res;});
      return res.json(response);
  } catch (e) {
    response={success:false,estacionModificada:false,error2:e}
    return res.json(response);
  }
}

module.exports=controller;

const estacion1=Estaciones.create({
  nro: 1,
  name: 'UTN',
  description: 'UTN FRLP',
  lat:-34.904,
  lng:-57.9253,
}).then(d=>{}).catch(d=>{console.log('Exisite estacion UTN')});

const estacion2= Estaciones.create({
  nro: 2,
  name: 'ZOO',
  description: 'Estacion del Zoo',
  lat:-34.91,
  lng:-57.937,
}).then(d=>{}).catch(d=>{console.log('Existe estacion Zoo')});

//        attributes: {  exclude:['createdAt','updatedAt','estados.createdAt']  }})
