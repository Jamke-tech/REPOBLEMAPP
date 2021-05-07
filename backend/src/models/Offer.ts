import { truncate } from 'fs-extra';
import {Schema,model,Document, Mongoose, Types} from 'mongoose';
var mongoose = require('mongoose');
var SchemaMongo = mongoose.Schema;

const schema = new Schema({
    title: String,
    description: String,
    pictures: String,
    place: {type: String}, //Adreça del carrer 
    point: { 
        type: {type: mongoose.Schema.Types.Point},
        coordinates: {type: [Number] }
    },
    owner: {type: SchemaMongo.ObjectId, ref: "User", populate:true},
    village: String, //Poble
    price: Number,
});


var OfferModel = mongoose.model('Offer',schema);
export default OfferModel;
