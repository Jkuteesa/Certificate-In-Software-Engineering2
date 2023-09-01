const express = require("express");
const path = require("path");
const dotenv = require("dotenv").config();


// importing our database setup
const connectDB = require("./config/dbConfig");
const port = process.env.PORT || 4000;
const app =express();

const Form = require("./models/formModel")

const formRoutes = require("./controllers/formRoutes")

// this is importing the express session an using it directly to pass parameters.
const expressSession = require("express-session")({
    secret: "secret", 
    resave: false,
    saveUnitialized: false
})
app.use(express.urlencoded({extended: false}));
app.use(express.json());

// calling the configuration to run
connectDB();

// setting up line using the new engine
app.engine("pug", require("pug").__express);
app.set("view engine","pug");
app.set("views", path.join(__dirname, "views"));

app.use(expressSession);


//setting up directory for static files
// __dirname means starting from the root folder called public
// line 16 should be above line 19(lines might keep changing but you get)
app.use(express.static(path.join(__dirname, "public")))

// using imported routes
app.use("/api", formRoutes)



// running the server on a specific port(3000)
// this should always be the last line in the server file
app.listen(port, () =>console.log(`listening on port 3000`));
// this is a call back
