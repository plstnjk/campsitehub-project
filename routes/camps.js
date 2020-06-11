var express = require("express");
var sanitizer = require("express-sanitizer");
var router = express.Router();
var Camp = require("../models/camp");
router.use(sanitizer());
var methodOverride = require("method-override");
router.use(methodOverride("_method"));
var middleware = require("../middleware");


// INDEX
router.get("/", function (request, response) {
    Camp.find({}, (error, camps) => {
        error ? console.log("something went wrong... " + error) : response.render("camps/index", { campgrounds: camps, currentUser: request.user });
    })
});


// CREATE
router.post("/", middleware.isUserLoggedIn, function (request, response) {
    var campName = request.body.camp.name;
    var price = request.body.camp.price;
    var location = request.body.camp.location;
    var img = request.body.camp.image;
    var author =
    {
        id: request.user._id,
        username: request.user.username
    };
    var desc = request.body.camp.description;
    var campObject = { name: campName, location: location, price: price, image: img, author: author, description: desc };
    Camp.create(campObject, (error, newCamp) => {
        error ? console.log("something went wrong...\n" + error) : response.redirect("/camps");
    });
});


// NEW
router.get("/new", middleware.isUserLoggedIn, function (request, response) {
    response.render("camps/new");
});


// SHOW
router.get("/:id", (request, response) => {
    // var id = ;
    Camp.findById(request.params.id).populate("comments").exec((error, foundCamp) => {
        error ? console.log("smth went wrong...") : response.render("camps/show", { campFound: foundCamp });
    });
});


// EDIT
router.get("/:id/edit", middleware.checkPermissionToUpdateCamp, (request, response) => {
    // is user logged in and owns the camp
    Camp.findById(request.params.id, (error, foundCamp) => {
        error ? response.redirect("back") : response.render("camps/edit", { camp: foundCamp });
    });
});


// UPDATE
router.put("/:id", middleware.checkPermissionToUpdateCamp, (request, response) => {
    request.body.camp.description = request.sanitize(request.body.camp.description);
    Camp.findByIdAndUpdate(request.params.id, request.body.camp, (error, foundCamp) => {
        error ? response.redirect("/camps") : response.redirect("/camps/" + request.params.id);
    });
});


// DELETE
router.delete("/:id", middleware.checkPermissionToUpdateCamp, (request, response) => {
    Camp.findByIdAndRemove(request.params.id, (error, campToDelete) => {
        error ? response.redirect("/camps") : response.redirect("/camps");
    });
});


module.exports = router;