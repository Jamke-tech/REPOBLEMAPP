import {Schema,model,Document, Mongoose} from 'mongoose';
var mongoose = require('mongoose');
var SchemaMongo = mongoose.Schema;

const schema = new Schema({
    userName: String,
    name: String,
    surname: String,
    password: String,
    email: String,
    phone: Number,
    profilePhoto: String,
    birthDate: Date,
    savedOffers: [{type: SchemaMongo.ObjectId, ref: "Offer"}], //Las ofertas guardadas seran vector de Offers
    social: [{type: SchemaMongo.ObjectId, ref: "Chat"}], //Todas las conversaciones que tiene

});

const User = mongoose.model('User',schema);

export default User;