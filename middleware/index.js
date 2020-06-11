var Camp = require("../models/camp");
var Comment = require("../models/comment");

var middlewareObject = {};

// MIDDLEWARE
middlewareObject.isUserLoggedIn = (request, response, next) => {
    if (request.isAuthenticated()) {
        return next();
    }
    request.flash("error", "You need to be logged in to do that.");
    response.redirect("/login");
}

middlewareObject.checkPermissionToUpdateCamp = (request, response, next) => {
    if (request.isAuthenticated()) {
        Camp.findById(request.params.id, (error, foundCamp) => {
            if (error) {
                request.flash("error", "Camp not found.");
                response.redirect("back");
            } else {
                if (foundCamp.author.id.equals(request.user._id)) {
                    next();
                } else {
                    request.flash("error", "You don't have permission to do that.");
                    response.redirect("back");
                }
            }
        });
    } else {
        response.redirect("back");
    }
}

middlewareObject.checkPermissionToUpdateComment = (request, response, next) => {
    if (request.isAuthenticated()) {
        Comment.findById(request.params.comment_id, (error, commentFound) => {
            if (error) {
                response.redirect("back");
            } else {
                if (commentFound.author.id.equals(request.user._id)) {
                    next();
                } else {
                    request.flash("error", "You don't have permission to do that.");
                    response.redirect("back");
                }
            }
        });
    } else {
        request.flash("error", "You need to be logged in to do that.");
        response.redirect("back");
    }
}

module.exports = middlewareObject;