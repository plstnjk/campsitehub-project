var mongoose = require("mongoose");
var Comment = require("./comment");
var User = require("./user");

mongoose.set('useUnifiedTopology', true);
mongoose.connect("mongodb://127.0.0.1:27017/yelp_camp", { useNewUrlParser: true });

///CAMP Schema and Model
var campSchema = new mongoose.Schema({
    name: String,
    location: String,
    price: String,
    image: String,
    author:
    {
        id:
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User"
        },
        username: String
    },
    description: String,
    comments: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Comment"
        }
    ]
});

var Camp = mongoose.model("Camp", campSchema);

module.exports = Camp;