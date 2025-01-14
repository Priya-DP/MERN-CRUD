const express = require("express");
const router = express.Router();
const {
  getMovie,
  CreateMovie,
  UpdateMovie,
  DeleteMovie,
  getMovieById,
} = require("../controller/movie-controller");

// CRUD Functionality

// R- Reading (View)
router.get("/movies", getMovie);

router.get("/movies/:id", getMovieById);

// c - Create
router.post("/movies", CreateMovie);

//  U - update
router.put("/movies/:id", UpdateMovie);

// D -Delete
router.delete("/movie/:id", DeleteMovie);

module.exports = router;
