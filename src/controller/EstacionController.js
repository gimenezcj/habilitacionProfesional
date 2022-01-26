

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

module.exports=controller;


//        attributes: {  exclude:['createdAt','updatedAt','estados.createdAt']  }})
