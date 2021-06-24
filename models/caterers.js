const mongoose = require("mongoose");


// SCHEMA
const caterer = new mongoose.Schema({
    name : {
        type:String,
        required:true
    },
    description : {
        type:String,
        required:true
    }
})


// COLLECTION

const Caterer = new mongoose.model("Caterer", caterer);

module.exports = Caterer;