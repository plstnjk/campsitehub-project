var express = require("express"),
    mongoose = require("mongoose"),
    bodyparser = require("body-parser"),
    passport = require("passport"),
    localStrategy = require("passport-local"),
    expressSession = require("express-session"),
    methodOverride = require("method-override"),
    flash = require("connect-flash"),
    Camp = require("./models/camp"),
    Comment = require("./models/comment"),
    User = require("./models/user"),
    seedDB = require("./seeds"),
    app = express();


// REQUIRING ROUTES
var campRoutes = require("./routes/camps"),
    commentRoutes = require("./routes/comments"),
    indexRoutes = require("./routes/auth");

///////////////DB CONFIG////////////////////
//seedDB();
mongoose.connect(process.env.DATABASE_URL,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false
    }
).then(() => { console.log("Connected to DB.") }).catch(error => { console.log("ERROR: " + error.message) });


//////////////APP CONFIG///////////////////
app.set("view engine", "ejs");
app.use(bodyparser.urlencoded({ extended: true }));
app.use(express.static(__dirname + "/public"));
app.use(methodOverride("_method"));
app.use(flash());


//////////////AUTH CONFIG//////////////////
app.use(expressSession({
    secret: "encoded",
    resave: false,
    saveUninitialized: false
}));

app.use(passport.initialize());
app.use(passport.session());

passport.use(new localStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

// Passing in variables to every template
app.use((request, response, next) => {
    response.locals.currentUser = request.user;
    response.locals.error = request.flash("error");
    response.locals.success = request.flash("success");
    next();
});


///////////USE ROUTES////////////////////
app.use(indexRoutes);
app.use("/camps", campRoutes);
app.use("/camps/:id/comments", commentRoutes);


//////////SERVER SETUP///////////////////
app.listen(process.env.PORT, () => {
    console.log("Server started on port " + process.env.PORT);
});
