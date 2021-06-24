const mongoose = require("mongoose");


// SCHEMA
const subscriber = new mongoose.Schema({
    email : {
        type:String,
        required:true
    }
})


// COLLECTION

const Subscriber = new mongoose.model("Subscriber", subscriber);

module.exports = Subscriber;