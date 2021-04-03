import { Router } from "express";
import {
  createUser,
  getUser,
  getUsers,
  updateUser,
} from "../controllers/user.controller";
import multer from "../libs/multer";

//Construim el router on posarem totes les entrades de la API
const router = Router();

//RECORDATORI LES RUTES DE LA API COMENÇEN PER /API

/* Exemple de entrada de api
router.route('/')
    .get ( Funció que ha de fer)*/

//IMPORTAR LES FUNCIONS DELS CONTROLLERS

router.route("/user").get(getUsers).post(createUser);
router.route("/user/:id").put(updateUser).get(getUser);

//Exportem totes les rutes per que les utilitzin

export default router;
