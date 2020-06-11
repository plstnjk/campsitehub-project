var mongoose = require("mongoose");
var passportLocalMongoose = require("passport-local-mongoose");

mongoose.set('useUnifiedTopology', true);
mongoose.connect("mongodb://127.0.0.1:27017/yelp_camp", { useNewUrlParser: true });

var userSchema = mongoose.Schema({
    name: String,
    email: String,
    username: String,
    password: String
});

userSchema.plugin(passportLocalMongoose);

var User = mongoose.model("User", userSchema);

module.exports = User;
