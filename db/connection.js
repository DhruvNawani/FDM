const mongoose = require("mongoose");


mongoose.connect("mongodb://localhost:27017/FDM", {useNewUrlParser:true, useUnifiedTopology:true, useCreateIndex:true }).then(() =>{
    console.log(`Connection succesful !!`);
}).catch( (e) => {
    console.log(`Unable to connect to the database !!`);
})