var express = require("express");
var router = express.Router({ mergeParams: true });
var Camp = require("../models/camp");
var Comment = require("../models/comment");
var middleware = require("../middleware");


// INDEX
router.get("/new", middleware.isUserLoggedIn, (request, response) => {
    Camp.findById(request.params.id, (error, foundCamp) => {
        error ? console.log("smth went wrong...") : response.render("comments/new", { campFound: foundCamp });
    });
});


// NEW
router.post("/", middleware.isUserLoggedIn, (request, response) => {
    // find camp based on ID
    Camp.findById(request.params.id, (error, foundCamp) => {
        if (error) {
            console.log(error);
            response.redirect("/camps");
        } else {
            Comment.create(request.body.comment, (error, comment) => {
                if (error) {
                    request.flash("error", "Oops! Something went wrong.");
                    console.log(error);
                } else {
                    // add username and id to comments
                    comment.author.id = request.user._id;
                    comment.author.username = request.user.username;
                    comment.save();
                    foundCamp.comments.push(comment);
                    foundCamp.save();
                    request.flash("success", "You have successfully added a comment.");
                    response.redirect("/camps/" + foundCamp._id);
                }
            });
        }
    });
});


// EDIT
router.get("/:comment_id/edit", middleware.checkPermissionToUpdateComment, (request, response) => {
    // is user logged in and owns the comment
    Comment.findById(request.params.comment_id, (error, foundComment) => {
        error ? response.redirect("back") : response.render("comments/edit", { camp_id: request.params.id, comment: foundComment });
    });
});


// UPDATE
router.put("/:comment_id", middleware.checkPermissionToUpdateComment, function (request, response) {
    Comment.findByIdAndUpdate(req.params.comment_id, req.body.comment, function (error, updatedComment) {
        if (error) {
            response.redirect("back");
        } else {
            response.redirect("/camps/" + request.params.id);
        }
    });
});

// DELETE
router.delete("/:comment_id", middleware.checkPermissionToUpdateComment, function (request, response) {
    Comment.findByIdAndRemove(request.params.comment_id, function (error) {
        if (error) {
            response.redirect("back");
        } else {
            request.flash("success", "Comment was successfully deleted.")
            response.redirect("/camps/" + request.params.id);
        }
    });
});

module.exports = router;