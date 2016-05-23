var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var MovieSchema = new Schema({
  director: String,
  title: String
});

var Movie = mongoose.model('Movie', MovieSchema);

module.exports = Movie;
