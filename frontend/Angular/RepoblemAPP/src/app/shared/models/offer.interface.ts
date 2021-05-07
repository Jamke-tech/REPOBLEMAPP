import { User } from "./user.interface";

export interface Offer{
    title: string;
    description: string;
    pictures: string;
    place: string;
    //point: string;
    owner: User;
    village: string;
    price: string;
    _id: string;
    
}