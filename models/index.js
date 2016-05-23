var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/movie_test");

var Movie = require('./movie');

module.exports.Movie = Movie;
