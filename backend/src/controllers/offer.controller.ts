import {Request, Response} from 'express'
import Offer from '../models/Offer'


export async function createOffer ( req: Request, res: Response): Promise<Response>{
//Recuperem la info de request body per poder-la treure i posar-la a la base de dades

    const {
        title,
        description,
        pictures,
        ubication,
        owner,
        village,
        price,
    } = req.body;

    //Posem tot en una nova variable de Offer
    const newOffer = {
        title: title,
        description: description,
        pictures: req.file.path,
        ubication: ubication,
        owner: owner,
        village: village,
        price: price
    }
    const offer = new Offer(newOffer);//creació del document de mongodb
    await offer.save(); //guardem offer

    return res.json({
        message: 'Offer correctly uploaded',
        idOffer: offer.id
    })
}

export async function deleteOffer (req: Request, res: Response): Promise<Response>{

    //recuperem el id de la oferta per poder-la eliminar
    const {id} = req.params;
    const offer = await Offer.findByIdAndDelete(id);

    //Faltaria eliminar les fotos del servidor

    return res.json({
        message: 'Oferta eliminada',
        offer: offer
    })

}

export async function getOffers (req:Request, res: Response): Promise<Response>{
    //Funció que retorna tota la llista de ofertes sense cap filtre
    const offers= await Offer.find();
    return res.json(offers);
}


