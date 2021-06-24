const mongoose = require("mongoose");


// SCHEMA
const event = new mongoose.Schema({
    name : {
        type:String,
        required:true
    },
    email : {
        type:String,
        required:true
    },
    eventLoc : {
        type:String,
        required:true
    },
    eventType : {
        type:String,
        required:true
    },
    subEventType : {
        type:String,
        required:true
    },
    stDate : {
        type:String,
        required:true
    },
    endDate : {
        type:String,
        required:true
    },
    invitees : {
        type:String,
        required:true
    },
    venue : {
        type:String,
        required:true
    },
    venuePrice : {
        type:String,
        required:true
    },
    venueProfit : {
        type:String,
        required:true
    },
    caterer : {
        type:String,
        required:true
    },
    food : {
        type:String,
        required:true
    },
    ppp : {
        type:String,
        required:true
    },
    pppProfit : {
        type:String,
        required:true
    },
    themeType : {
        type:String,
        required:true
    },
    themeDesc : {
        type:String,
        required:true
    },
    themeProfit : {
        type:String,
        required:true
    },
    extraFacilities : {
        type:String
    },
    extraDesc : {
        type:String,
    },
    totalCost : {
        type:String,
        required:true
    },
})


// COLLECTION

const Event = new mongoose.model("Event", event);

module.exports = Event;