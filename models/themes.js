const mongoose = require("mongoose");


// SCHEMA
const theme = new mongoose.Schema({
    theme : {
        type:String,
        required:true
    },
    price : {
        type:Number,
        required:true
    }
})


// COLLECTION

const Theme = new mongoose.model("Theme", theme);

module.exports = Theme;