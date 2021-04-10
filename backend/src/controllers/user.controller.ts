import { Request, Response } from "express";
import User from "../models/User";

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

export async function createUser(
  req: Request,
  res: Response
): Promise<Response> {
  const { userName, password } = req.body;

  const newUser = {
    userName: userName,
    password: password,
  };

  const user = new User(newUser); // creem l'objecte de MongoDB
  await user.save(); //guardem la foto amb mongoose

  return res.json({
    message: "User correctly uploaded",
    id: user.id
  });
}

export async function createCompleteUser(
  req: Request,
  res: Response
): Promise<Response> {
  const { userName, name, surname, password, email, phone, profilePhoto, birthDate } = req.body;

  const newUser = {
    userName: userName,
    name: name,
    surname: surname,
    password: password,
    email: email,
    phone: phone,
    profilePhoto: profilePhoto,
    birthDate: birthDate
  };
  const user = new User(newUser); // creem l'objecte de MongoDB
  await user.save(); //guardem la foto amb mongoose

  return res.json({
    message: "User correctly uploaded",
    id:user.id
  });
}

export async function getUsers(req: Request, res: Response): Promise<Response> {
  const Users = await User.find();
  return res.json(Users);
}

export async function getUser(req: Request, res: Response): Promise<Response> {
  const user = await User.findById(req.params.id);
  return res.json(user);
}

export async function updateUser(
  req: Request,
  res: Response
): Promise<Response> {
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
