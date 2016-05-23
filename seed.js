var db = require("./models");

var movieList =[];
movieList.push({
              director: 'Nine Inch Nails',
              title: 'The Downward Spiral',
            });
movieList.push({
              director: 'Metallica',
              title: 'Metallica',
            });
movieList.push({
              director: 'The Prodigy',
              title: 'Music for the Jilted Generation',
            });
movieList.push({
              director: 'Johnny Cash',
              title: 'Unchained',
            });

db.Movie.create(movieList, function(err, movies){
  if (err) { return console.log('ERROR', err); }
  console.log("all movies:", movies);
  console.log("created", movies.length, "movies");
  process.exit();
});
