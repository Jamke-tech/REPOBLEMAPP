import { Offer } from "./offer.interface";

export interface User{
    profilePhoto: string;
    name: string;
    surname: string;
    userName: string;
    password: string;
    email: string;
    phone: string;
    birthDate: Date;
    savedOffers:Array<Offer>;
    social: string;
    id: number;

}
