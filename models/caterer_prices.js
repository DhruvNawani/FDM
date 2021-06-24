const mongoose = require("mongoose");


// SCHEMA
const caterer_price = new mongoose.Schema({
    price : {
        type:Number,
        required:true
    }
})


// COLLECTION

const Caterer_price = new mongoose.model("Caterer_price", caterer_price);

module.exports = Caterer_price;