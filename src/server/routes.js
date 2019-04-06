const routes = require("next-routes");

module.exports = routes().add("movies", "/movies/:slug", "movies");
// .add("movie", "/movie/:slug");
