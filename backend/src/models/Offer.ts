import {Schema,model,Document, Mongoose} from 'mongoose';
var mongoose = require('mongoose');
var SchemaMongo = mongoose.Schema;

const schema = new Schema({
    title: String,
    description: String,
    pictures: String,
    ubication: String,
    owner: {type: SchemaMongo.ObjectId, ref: "User"},
    village: String,
    price: Number,
});

const Offer = mongoose.model('Offer',schema);

export default Offer;