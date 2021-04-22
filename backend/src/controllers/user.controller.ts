import { Request, Response } from "express";
import User from "../models/User";
import path from 'path';
import fs from 'fs-extra';

/* ---- EXEMPLE DE FUNCIÓ ---
export async function createUser (req: Request, res: Response): Promise<Response> {

    const{ username, password} = req.body;

    const newUser ={
        username: username,
        password: password
    };

    const user= new User (newUser);// creem l'objecte de MongoDB
    await user.save()//guardem la foto amb mongoose

    return res.json({
        message : 'User correctly uploaded'
    })
}*/

export async function loginADMIN (req:Request,res:Response):Promise<Response> {

  const{ userName, password} = req.body;
  
  const findUser = {
    userName: userName,
  };
  try{
  const user = await User.find(findUser);

  //Hem de comprovar que la contrasenya sigui la mateixa que ens entren 
  //ACHTUNG !! Quan tenim un fid ens retorna un vector
  
    
    if(user[0].password == password && user[0].role == "ADMIN")
    {
      //Contrasenya correcta 
      return res.json({
        code: '200',
        message: "User authorized",
        id: user[0].id,
        //token
        //rol
      });
    }
    else{
      return res.json({
        code:'401',
        message: " Acces Unahtorized",
        id: user[0].id,
        //token
        //rol
      });
    }
  } 
  catch{
    return res.json({
      code: '404',
      message: "User not found on BBDD",
    });
  }
   
}
export async function loginUsers (req:Request,res:Response):Promise<Response> {

  const{ userName, password} = req.body;
  
  const findUser = {
    userName: userName,
  };
  try{
  const user = await User.find(findUser);

  //Hem de comprovar que la contrasenya sigui la mateixa que ens entren 
  //ACHTUNG !! Quan tenim un fid ens retorna un vector
    
    if(user[0].password == password )
    {
      //Contrasenya correcta 
      return res.json({
        code: '200',
        message: "User authorized",
        id: user[0].id,
        //token
        //rol
      });
    }
    else{
      return res.json({
        code:'401',
        message: " Acces Unahtorized",
        id: user[0].id,
        //token
        //rol
      });
    }
  } 
  catch{
    return res.json({
      code: '404',
      message: "User not found on BBDD",
    });
  }
   
}


export async function createADMIN(  req: Request,  res: Response): Promise<Response> {
  const { userName, password } = req.body;

  const newUser = {
    userName: userName,
    password: password,
    role: "ADMIN"
  };
  try{

  const user = new User(newUser); // creem l'objecte de MongoDB
  await user.save(); //guardem l'usuari a Mongo DB

  return res.json({
    code: '200',
    message: "User correctly uploaded",
    id: user.id
  });
}
catch{
  //agafem possibles errors de la bbdd
  return res.json({
    code: '505',
    message: "Server Down",
  });


}
}

export async function createCompleteUser( req: Request,  res: Response ): Promise<Response> {
  const { userName, name, surname, password, email, phone, birthDate } = req.body;

  const newUser = {
    userName: userName,
    name: name,
    surname: surname,
    password: password,
    email: email,
    phone: phone,
    profilePhoto: "assets/"+req.file.filename,
    birthDate: birthDate,
    role: "USER"
  };
  try{
  const user = new User(newUser); // creem l'objecte de MongoDB
  await user.save(); //guardem la foto amb mongoose

  return res.json({
    code: '200',
    message: "User correctly uploaded",
    id: user.id
  });
}
catch{
  return res.json({
    code: '505',
    message: "Server Down",
  });

}
}

export async function getUsers(req: Request, res: Response): Promise<Response> {
  try{
  const Users = await User.find();
  return res.json({
    code: '200',
    message: 'List of Users',
    usersList: Users
  }
    );
  }
  catch{
    return res.json({
      code: '500',
      message: 'Server Down or BBDD broken',
      usersList: null
    }
      );
  }

}


export async function getUser(req: Request, res: Response): Promise<Response> {
  try{
  const user = await User.findById(req.params.id);
  return res.json({
    code: '200',
    message: 'User Found',
    user: user});
  }
  catch{
    return res.json({
      code: '500',
      message: 'Server Down or BBDD error',
      user: null});
    }

}


export async function deleteUser(req: Request, res: Response): Promise<Response> {
  try{
  //Borramos el usuario 
    const user = await User.findByIdAndDelete(req.params.id);
  //Borramos la fotografia
  if(user){
    await fs.unlink(path.resolve("../frontend/Angular/RepoblemAPP/src/"+ user.profilePhoto))//eliminamos la fotografia del servidor
    
    return res.json({
      code: '200',
      message: "succesfully deleted user:" + user?.userName,
      id: user?.id});
    }
  else{
    return res.json({
      code: '404',
      message: "User not found",
      });
    }

  }


  
  catch (e){
    console.log(e);
    return res.json({
      code: '500',
      message: "Server Down or errorn on BBDD",
      id: null});

  }
}

export async function updateUser( req: Request, res: Response): Promise<Response> {
  const { id } = req.params;
  const {
    userName,
    name,
    surname,
    password,
    email,
    phone,
    profilePhoto,
    birthDate,
  } = req.body;

  const updatedUser = await User.findByIdAndUpdate(
    id,
    {
      userName,
      name,
      surname,
      password,
      email,
      phone,
      profilePhoto,
      birthDate,
    },
    { new: true }
  );
  return res.json({
    message: "successfully updated",
    updatedUser,
  });
}
