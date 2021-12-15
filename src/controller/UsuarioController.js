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



module.exports=controller;
