require('dotenv').config();
const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const ejs = require('ejs');
const fs = require('fs');
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');


const con = require("./db/connection");
const registrations = require("./models/registrations");
const venues = require("./models/venues");
const caterers = require("./models/caterers");
const themes = require("./models/themes");
const caterer_prices = require("./models/caterer_prices");
const events = require("./models/events");
const messages = require("./models/messages")
const subscribers = require("./models/subscribers");

const auth = require("./middleware/auth");


const bcryptjs = require('bcryptjs');
var bodyparser = require('body-parser');


const app = express();
const port = process.env.PORT || 80;

const static = path.join(__dirname, "/static");

const db = mongoose.connection;

var login_status = false;

app.use(express.static(static));

// const home = path.join(__dirname, "/views/home.hbs");
// const about = fs.readFileSync('about');
// const contact_us = fs.readFileSync('conatact_us');
// const portfolio = fs.readFileSync('portfolio');
// const services = fs.readFileSync('services');
// var routes = require ('./routes/index')

app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({
    extended: true
}));
// app.use('/static', express.static('static'))
// app.use(express.urlencoded());
app.set("view engine", "ejs");
// app.engine('hbs', hbs({extname: 'hbs'    , defaultLayout: 'Layout', layoutDir: __dirname + '/views/layouts/'}));
// app.set('views', path.join(__dirname, 'views'));


app.get("/", (req, res) => {
    res.render("home", {
        logged: login_status
    });
});

app.get("/about", (req, res) => {
    res.render('about', {
        logged: login_status
    });
});

app.get("/contact_us", (req, res) => {
    res.render('contact_us', {
        logged: login_status
    });
});

app.get("/home", (req, res) => {
    console.log(`this is the cookie ${req.cookies.jwt}`);
    res.render("home", {
        logged: login_status
    });
});
app.get("/services", auth, (req, res) => {
    login_status = true;
    res.render('services', {
        logged: login_status
    });
});

app.post("/venues", async (req, res) => {
    try {
        console.log('processing results');
        var venueList = await venues.find({
            city: req.body.city,
            type: req.body.type,
            price: {
                $lte: req.body.price
            }
        });
        // , capacity: { $gte: req.capacity}
        // console.log('processing results2');
        console.log(req.body.city);
        console.log(req.body.type);
        console.log(req.body.price);
        // console.log(venueList);
        res.json(venueList);
        // res.redirect('/services');
    } catch (error) {
        console.log(error);
        console.log('Some error occured2');
    }

})

app.post("/caterer_prices", async (req, res) => {
    try {
        console.log('processing results');
        // console.log(req.body);
        var caterer_priceList = await caterer_prices.find({
            price: {
                $lte: req.body.price
            }
        });
        // , capacity: { $gte: req.capacity}
        // console.log(caterer_priceList)
        res.json(caterer_priceList);
        // res.redirect('/services');
    } catch (error) {
        console.log(error);
        console.log('Some error occured2');
    }

})


app.post("/themes", async (req, res) => {
    try {
        console.log('processing results 4');
        var themeList = await themes.find({
            price: {
                $lte: req.body.price
            }
        });
        // , capacity: { $gte: req.capacity}
        console.log(themeList)
        res.json(themeList);
        // res.redirect('/services');
    } catch (error) {
        console.log(error);
        console.log('Some error occured2');
    }

})

app.get("/caterers", async (req, res) => {
    try {
        console.log('processing results 5');
        var catererList = await caterers.find();
        // , capacity: { $gte: req.capacity}
        // console.log(catererList)
        res.json(catererList);
        // res.redirect('/services');
    } catch (error) {
        console.log(error);
        console.log('Some error occured2');
    }

})


app.get("/portfolio", (req, res) => {
    res.render('portfolio', {
        logged: login_status
    })
});

app.get("/login", (req, res) => {
    res.render('login', {
        logged: login_status
    })
});

app.post("/register", async (req, res) => {
    try {
        const psw = req.body.password;
        const conpsw = req.body.confirmPassword;
        if (psw === conpsw) {
            const addCustomer = new registrations({
                firstName: req.body.firstName,
                lastName: req.body.lastName,
                email: req.body.email,
                username: req.body.username,
                password: req.body.password,
                gender: req.body.gender,
                contact: req.body.contact,
                age: req.body.age,
                city: req.body.city,
                type: 'user'
            });
            console.log(req.body);

            // const token = await addCustomer.generateAuthToken();
            // console.log(token);

            // res.cookie("jwt", token, {
            //     expires: new Date(Date.now() + 3600000),
            //     httpOnly: true
            // });
            // console.log(cookie);

            const cust = await addCustomer.save();
            res.status(201).render("home", {
                logged: login_status
            });
        } else {
            res.send("Passwords do not match")
        }
    } catch (error) {
        res.status(400).send(error);
    }
});

app.post("/events", async (req, res) => {
    try {
        console.log(req.body);
        const token = req.cookies.jwt;
        const user = await registrations.findOne({
            'tokens.token': token
        })
        const eventList = await events.find({
            email: user.email
        });
        console.log(eventList);

        res.json(eventList);

    } catch (error) {
        console.log("event error");
        console.log(error);
    }
})

app.post("/submit", async (req, res) => {
    try {
        console.log(req.body);
        const token = req.cookies.jwt;
        const user = await registrations.findOne({
            'tokens.token': token
        })
        var custName = user.firstName + " " + user.lastName;
        const addEvent = new events({
            name: custName,
            email: user.email,
            eventLoc: req.body.eventLoc,
            eventType: req.body.eventType,
            subEventType: req.body.subEventType,
            stDate: req.body.stDate,
            endDate: req.body.endDate,
            invitees: req.body.invitees,
            venue: req.body.venue,
            venuePrice: req.body.venuePrice,
            venueProfit: req.body.venueProfit,
            caterer: req.body.caterer,
            food: req.body.food,
            ppp: req.body.ppp,
            pppProfit: req.body.pppProfit,
            themeType: req.body.themeType,
            themeDesc: req.body.themeDesc,
            themeProfit: req.body.themeProfit,
            extraFacilities: req.body.extraFacilities,
            extraDesc: req.body.extraDesc,
            totalCost: req.body.totalCost
        });
        console.log(req.body);
        console.log(addEvent);

        const event = await addEvent.save();
        res.render("home", {
            logged: login_status
        });

    } catch (error) {
        console.log("submit error");
        console.log(error);
    }
});

app.post("/login", async (req, res) => {
    try {
        const email = req.body.email;
        const password = req.body.password;

        const user = await registrations.findOne({email: email});
        // var str = "123";
        // const hash = await bcryptjs.hash(str,10)
        // const isMatch = await bcryptjs.compare(str, hash);


        const isMatch = await bcryptjs.compare(password, user.password);

        // console.log(isMatch); 
        const token = await user.generateAuthToken();
        await user.save();


        res.cookie("jwt", token, {
            httpOnly: true
        });

        // console.log(token);
        console.log(isMatch);
        console.log(password);
        // console.log(email);
        // console.log(user.email);
        // console.log(user.password);
        // const salt = await bcryptjs.genSalt(10);
        // const hashedPassword = await bcryptjs.hash(password, salt);
        // console.log(hashedPassword);
        // Match = await bcryptjs.compare(password, hashedPassword);
        // console.log(Match);
        if (isMatch) {
            login_status = true;
            console.log("Successful Login");
            if (user.type === 'user')
                res.render('home', {
                    logged: login_status
                });
            else {
                res.render('admin_home', {
                    logged: login_status
                });
            }
        } else {
            res.send('Incorrect Password');
        }
    } catch (error) {
        res.send("Invalid Email or Password" + error);
    }
});

app.get("/logout", auth, (req, res) => {
    login_status = false;

    req.user.tokens = req.user.tokens.filter((currentElement) => {
        return currentElement.token !== req.token;
    })

    res.clearCookie("jwt");

    req.user.save();
    res.render('login', {
        logged: login_status
    })
});

app.get("/profile", async (req, res) => {

    try {
        const token = req.cookies.jwt;
        const user = await registrations.findOne({
            'tokens.token': token
        })
        console.log(`user data ${user}`);
        res.render('profile', {
            logged: login_status,
            firstName: user.firstName,
            lastName: user.lastName,
            username: user.username,
            email: user.email,
            contact: user.contact,
            age: user.age,
            city: user.city,
            gender: user.gender
        });
    } catch (error) {

    }
});

app.post("/subscribe", async (req, res) => {
    const subscriber = new subscribers({
        email: req.body.email
    });
    const temp = await subscriber.save();
})

app.post("/contact_us", async (req, res) => {
    console.log(req.body);
    const message = new messages({
        name: req.body.name,
        contact: req.body.contact,
        email: req.body.email,
        message: req.body.message,
        date : new Date()
    });
    const temp = await message.save();
    res.render('contact_us', {
        logged: login_status
    });
})




// ==========================================================ADMIN=======================================================

app.get("/admin_home", async (req, res) => {
    res.render("admin_home", {
        logged: login_status
    });
});
app.get("/events", async (req, res) => {
    var data = await events.find({});
    res.render("events", {
        logged: login_status, data: data
    });
});
app.get("/messages", async (req, res) => {
    var data = await messages.find({});
    // console.log(data);
    res.render("messages", {
        logged: login_status, data: data
    });
});
app.get("/subscribers", async (req, res) => {
    var data = await subscribers.find({});
    res.render("subscribers", {
        logged: login_status, data: data
    });
});


app.listen(port, () => {
    console.log(`The applicatoin started successfully on port ${port}`)
});