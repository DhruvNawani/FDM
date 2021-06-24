const mongoose = require("mongoose");


// SCHEMA
const message = new mongoose.Schema({
    name : {
        type:String,
        required:true
    },
    contact : {
        type:String,
        required:true
    },
    email : {
        type:String,
        required: true
    },
    message : {
        type:String,
        required:true
    },
    date : {
        type:String,
        required:true
    }
})


// COLLECTION

const Message = new mongoose.model("Message", message);

module.exports = Message;