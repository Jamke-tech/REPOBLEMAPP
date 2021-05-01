import {Request, Response} from 'express'
import Offer from '../models/Offer'
import path from 'path';
import fs from 'fs-extra';


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
    };
    console.log(newOffer);
    try{
        var errorSave : Boolean = false;
        const offer = new Offer(newOffer);//creació del document de mongodb
        await offer.save(function(err){
            console.log(err);
            if(err){
                errorSave= true;
            }
            else{
                errorSave= false
            }
        }
        ); //guardem offer
        
        if (errorSave){
            return res.json({
                code: '403',
                message: "Error en dades de la oferta"
              });
        }

        else{
            //Eliminem les fotos
            await fs.unlink(path.resolve("../frontend/Angular/RepoblemAPP/src/"+ offer.pictures))
            return res.json({
                code: '200',
                message: "Offer correctly uploaded",
                idOffer: offer.id
            });
        }
    }
    catch{
        return res.json({
            code: '505',
            message: "Server Down",
          });
    }
}

export async function deleteOffer (req: Request, res: Response): Promise<Response>{
    
    try{
        //Borramos la oferta
        //Recuperamos la id de la oferta para poder borrarla
        const {id} = req.params;
        const offer = await Offer.findByIdAndDelete(id);
        if(offer){
            await fs.unlink(path.resolve("../frontend/Angular/RepoblemAPP/src/"+ offer.pictures))//eliminamos la fotografia del servidor
            
            return res.json({
              code: '200',
              message: "succesfully deleted offer:" + offer?.title,
              id: offer?.id});
            }
        
        else{
            return res.json({
                code: '404',
                message: "Offer not found",
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

export async function getOffers (req:Request, res: Response): Promise<Response>{
    //Funció que retorna tota la llista de ofertes sense cap filtre
    const offers= await Offer.find();
    try{
        return res.json({
            code: '200',
            message: 'List of Offers',
            offersList: offers
            });
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

export async function getOffer(req: Request, res: Response): Promise<Response> {
    try{
    const offer = await Offer.findById(req.params.id);
    
    
    return res.json({
      code: '200',
      message: 'Offer Found',
      offer: offer});
    }
    catch{
      return res.json({
        code: '500',
        message: 'Server Down or BBDD error',
        offer: null});
      }
  
  }

  export async function updatedOffer(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    const {
        title,
        description,
        pictures,
        ubication,
        owner,
        village,
        price,
    } = req.body;
    try{
    //Posem tot en una nova variable de Offer
    const updatedOffer = await Offer.findByIdAndUpdate(
        id,
        {
            title,
            description,
            pictures,
            ubication,
            owner,
            village,
            price,
        },
        {new: true}
    );
    return res.json({
        code:"200",
        message: "successfully updated",
        updatedOffer,
      });
    }
    catch{
      return res.json({
        code:"500",
        message: "Offer not updated"
        
      });
  
    }
      
  }

