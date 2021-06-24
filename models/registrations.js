const mongoose = require("mongoose");
const bcryptjs = require("bcryptjs");
const jwt = require('jsonwebtoken');


// SCHEMA
const customer = new mongoose.Schema({
    firstName : {
       type:String,
       required:true
    },
    lastName : {
        type:String,
        required:true
    },
    email : {
        type:String,
        required:true,
        unique:true
    },
    username : {
        type:String,
        required:true,
        unique:true
     },
    password : {
        type:String,
        required:true
    },
    gender : {
        type:String,
        required:true
    },
    contact : {
        type:Number,
        required:true,
        unique:true
    },
    age : {
        type:Number,
        required:true
    },
    city : {
        type:String,
        required:true
    },
    type :{
        type: String
    },
    tokens:[{
        token:{
            type:String,
            required:true
        }
    }]
})

//generating tokens
customer.methods.generateAuthToken = async  function() {
    try {
        console.log(this.id);
        const token = jwt.sign({_id: this._id}, process.env.SECRET_KEY)
        console.log(token);
        this.tokens = this.tokens.concat({token:token});
        // await this.save();
        return token;
    } catch (error) {
        res.send("Some error occurred." + error)
    }
}


//hashing password
customer.pre("save", async function(next) {
    if(this.isModified("password")){
        this.password = await bcryptjs.hash(this.password, 10);
    }
    next();
    
})

// COLLECTION

const Registration = new mongoose.model("Registration", customer);

module.exports = Registration;