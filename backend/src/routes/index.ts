import {Router} from 'express';
import { createOffer, deleteOffer } from '../controllers/offer.controller';
import multer from '../libs/multer'

//Construim el router on posarem totes les entrades de la API
const router = Router();

//RECORDATORI LES RUTES DE LA API COMENÇEN PER /API


/* Exemple de entrada de api
router.route('/')
    .get ( Funció que ha de fer)*/

//IMPORTAR LES FUNCIONS DELS CONTROLLERS




//RUTES PER LES OFERTES

router.route('/offer')
    .post(createOffer)
    .delete(deleteOffer)





//Exportem totes les rutes per que les utilitzin

export default router;


