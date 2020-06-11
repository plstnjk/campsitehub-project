var express = require("express");
var router = express.Router();
var User = require("../models/user");
var passport = require("passport");


// INDEX
router.get("/", function (req, resp) {
    resp.render("landing");
});

// AUTH
// SIGN UP
router.get("/register", (request, response) => {
    response.render("register");
});

// HANDLE SIGN UP
router.post("/register", (request, response) => {
    User.register(new User({ username: request.body.username }), request.body.password, (error, user) => {
        if (error) {
            request.flash("error", error.message);
            return response.render("register");
        }
        passport.authenticate("local")(request, response, () => {
            request.flash("success", "Welcome to YelpCamp, " + user.username + "!");
            response.redirect("/camps");
        });
    });
});

// LOGIN
router.get("/login", (request, response) => {
    response.render("login");
});

// HANDLE LOGIN
var loginHandle = passport.authenticate("local",
    {
        successRedirect: "/camps",
        failureRedirect: "/login"
    });

router.post("/login", loginHandle, (request, response) => { });

// LOGOUT
router.get("/logout", (request, response) => {
    request.logout();
    request.flash("success", "You have successfully logged out.")
    response.redirect("/");
});


module.exports = router;
