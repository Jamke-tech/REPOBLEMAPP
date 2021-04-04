import {Schema,model,Document, Mongoose, Types} from 'mongoose';
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

interface IOffer extends Document {
    title: string;
    description: string;
    pictures: string;
    ubication: string;
    owner: Types.ObjectId | Record<string, unknown>;
    village: string;
    price: number;

};

export default model<IOffer>('Offer',schema);