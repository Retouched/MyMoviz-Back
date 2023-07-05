var express = require("express");
var router = express.Router();
const fetch = require("node-fetch");

router.get("/movies", (req, res) => {
  const TMDB_API_KEY = process.env.TMDB_API_KEY;
  const url = `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&api_key=${TMDB_API_KEY}`;

  fetch(url)
    .then((response) => response.json())
    .then((data) => res.json({ movies: data.results }))
    .catch((err) => console.error("error:" + err));
});

module.exports = router;
