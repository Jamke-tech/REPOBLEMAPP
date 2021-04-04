import {Schema,model,Document, Mongoose, Types} from 'mongoose';
var mongoose = require('mongoose');
var SchemaMongo = mongoose.Schema;

//Falta implemtnar és una base molt pobre

const schema = new Schema({
    with: {type: SchemaMongo.ObjectId, ref: "User"},
    offerRelated: {type: SchemaMongo.ObjectId, ref: "Offer"},
    messages: String,
    
});

interface IChat extends Document {
    with: Types.ObjectId | Record<string,unknown>;
    offerRelated: Types.ObjectId | Record<string,unknown>;
    messages: string;
};

export default model<IChat>('Chat',schema);