import {Schema,model,Document, Mongoose, Types} from 'mongoose';
var mongoose = require('mongoose');
var SchemaMongo = mongoose.Schema;

const schema = new Schema({
    userName: { type: String , unique: true, required : true},
    name: String,
    surname: String,
    password: String,
    email: {type: String , unique: true, required: true},
    phone: Number,
    profilePhoto: String,
    birthDate: Date,
    savedOffers: [{type: SchemaMongo.ObjectId, ref: "Offer"}], //Las ofertas guardadas seran vector de Offers
    social: [{type: SchemaMongo.ObjectId, ref: "Chat"}], //Todas las conversaciones que tiene
    role: {type: String, enum: ["USER", "ADMIN"], required:true},

});

var UserModel = mongoose.model('User',schema);

export default  UserModel;

