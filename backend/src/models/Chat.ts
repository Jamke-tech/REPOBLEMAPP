import {Schema,model,Document, Mongoose} from 'mongoose';
var mongoose = require('mongoose');
var SchemaMongo = mongoose.Schema;

//Falta implemtnar és una base molt pobre

const schema = new Schema({
    with: {type: SchemaMongo.ObjectId, ref: "User"},
    offerRelated: {type: SchemaMongo.ObjectId, ref: "Offer"},
    messages: String,
    
});

const Chat = mongoose.model('Caht',schema);

export default Chat;