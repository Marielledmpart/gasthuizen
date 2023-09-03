const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectData = new Schema({
    id: String,
    objectId: String,
    title: String,
    imagePath: String,
    textBody:String
})

module.exports =  mongoose.model('ObjectData',ObjectData)
