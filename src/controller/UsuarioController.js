const controller={}

var Usuarios=require('./../model/Usuarios');


controller.index=(reg,res)=>{
  const data ={
    name:'javier',
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

controller.listAll=async(req,res)=>{
  try {
    const response=await Usuarios.findAll()
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
  var generaToken = function() {
    return Math.random().toString(36).substr(2);
  };

  try {
    const {email,password}=req.body;

    const response=await Usuarios.findAll({
      where: {email:email,password:password},
      attributes: {  exclude:['id','token','password','createdAt','updatedAt']  }
    })
    .then((data)=>{
      if(data.length != 0){
        data[0].token=generaToken();
        var res={success:true,message: 'encontrado', token:data[0]}}
      else
        var res={success:false,message: 'no coinciden los datos'}
      return res;})
    .catch(error=>{
      const res={success:false,error:error}
      return res;});
    return res.json(response);
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

controller.create=async(req,res)=>{
  const {email,username,password}=req.body;
  try {
    const response=await Usuarios.create({
      name:username,
      email:email,
      password:password,
    })
    .then((data)=>{
      console.log(data);
      return {success:true,usuarioCreado: true, data:data};
    })
    .catch(error=>{
      const res={success:false,usuarioCreado:false,error:error}
      return res;});
      return res.json(response);
  } catch (e) {
    response={success:false,usuarioCreado:false,error:'Error al crear el usuario'}
//    console.log('Error al crear al usuario');
//    console.log(e);
    return res.json(response);
  }

}

controller.regenPassword=async(req,res)=>{
  const {email}=req.body;
  const response=await Usuarios.findAll({
      where: {email:email},
      attributes: {  exclude:['id','token','password','createdAt','updatedAt']}
  })
  .then((data)=>{
    if(data.length != 0)
      return {success:true,find:true,data:data[0]}
    else
      return {success:false,find:false}
  })
  .catch(error=>{
    console.log(data);
  });
  return res.json(response);
}


module.exports=controller;
