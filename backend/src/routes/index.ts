import { createOffer, deleteOffer } from '../controllers/offer.controller';
import { Router } from "express";
import {
  createUser,
  createCompleteUser,
  getUser,
  getUsers,
  updateUser,
  deleteUser,
} from "../controllers/user.controller";
import multer from "../libs/multer";


//Construim el router on posarem totes les entrades de la API
const router = Router();

//RECORDATORI LES RUTES DE LA API COMENÇEN PER /API

/* Exemple de entrada de api
router.route('/')
    .get ( Funció que ha de fer)*/

//IMPORTAR LES FUNCIONS DELS CONTROLLERS


//RUTES DELS USUARIS
router.route("/user")
    .get(getUsers)
    .post(createUser);

router.route("/user/:id")
    .put(updateUser)
    .get(getUser)
    .delete(deleteUser);

    router.route("/completeUser")
    .get(getUsers)
    .post(createCompleteUser);

router.route("/getUser/:id")
    .get(getUser);


//RUTES PER LES OFERTES
router.route('/offer')
    .post(createOffer)
    .delete(deleteOffer)



//Exportem totes les rutes per que les utilitzin

export default router;
