// require('dotenv').config();

const jwt = require('jsonwebtoken');
// const cookieParser = require('cookie-parser');

const registrations = require("../models/registrations");


const auth = async (req, res, next) => {
    try {
        const token = req.cookies.jwt;
        console.log(token);;
        
        const verifyUser = jwt.verify(token, process.env.SECRET_KEY);
        console.log(verifyUser);
        const user = await registrations.findOne({_id: verifyUser._id});
        console.log(user);

        req.token = token;
        req.user = user;
        next();
        
    } catch (error) {
        res.status(401).send("Please Login First.");
    }

}

module.exports = auth;