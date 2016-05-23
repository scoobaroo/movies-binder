function index(req, res) {
  res.json({
    message: "Welcome to Your Movie Binder!",
    documentation_url: "https://github.com/scoobaroo/movies-binder",
    base_url: "http://movies-binder.herokuapp.com",
    endpoints: [
      {method: "GET", path: "/api", description: "Describes available endpoints"}
    ]
  });
}

function templates(req, res) {
  var name = req.params.name;
  res.render('templates/' + name);
}

module.exports.index = index;
module.exports.templates = templates;
