import {Schema,model,Document, Mongoose, Types} from 'mongoose';
var mongoose = require('mongoose');
var SchemaMongo = mongoose.Schema;

const schema = new Schema({
    userName: { type: String , unique: true, required : true},
    name: String,
    surname: String,
    password: String,
    email: {type: String , unique: true},
    phone: Number,
    profilePhoto: String,
    birthDate: Date,
    savedOffers: [{type: SchemaMongo.ObjectId, ref: "Offer"}], //Las ofertas guardadas seran vector de Offers
    social: [{type: SchemaMongo.ObjectId, ref: "Chat"}], //Todas las conversaciones que tiene
    role: {type: String, enum: ["USER", "ADMIN"], required:true},

});

interface IUser extends Document {
    userName: string ;
    name: string;
    surname: string;
    password: string;
    email: string;
    phone: number;
    profilePhoto: string;
    birthDate: Date;
    savedOffers: Array<Types.ObjectId | Record<string, unknown>>;
    social: Array<Types.ObjectId | Record<string, unknown>>;
    role: string;

};

export default model<IUser>('User',schema);