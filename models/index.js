
var mongoose = require('../db/connection')
mongoose.connect("mongodb://localhost/wayfarer-back");

module.exports.City = require("./cities.js");
module.exports.User = require("./users.js");
module.exports.Post = require("./posts.js");