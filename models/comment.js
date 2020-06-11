var mongoose = require("mongoose");

mongoose.set('useUnifiedTopology', true);
mongoose.connect("mongodb://127.0.0.1:27017/yelp_camp", { useNewUrlParser: true });

///COMMENT Schema and Model
var commentSchema = new mongoose.Schema({
    author:
    {
        id:
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User"
        },
        username: String
    },
    content: String,
    created: { type: Date, default: Date.now }
});

var Comment = mongoose.model("Comment", commentSchema);

module.exports = Comment;