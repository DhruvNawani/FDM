const mongoose = require("mongoose");


// SCHEMA
const venue = new mongoose.Schema({
    city : {
       type:String,
       required:true
    },
    type : {
        type:String,
        required:true
    },
    description : {
        type:String,
        required:true
    },
    keyFeatures : {
        type:String
     },
    name : {
        type:String,
        required:true
    },
    address : {
        type:String,
        required:true,
        unique:true
    },
    capacity : {
        type:Number,
        required:true
    },
    price : {
        type:Number,
        required:true
    },
    img_src : {
        type:String,
        required:true
    }
})


// COLLECTION

const Venue = new mongoose.model("Venue", venue);

module.exports = Venue;