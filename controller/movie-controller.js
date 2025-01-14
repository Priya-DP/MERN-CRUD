// const getMovie = require('../routes/movie-route')

const MovieSchema = require("../models/movie-modules");

exports.getMovie = async (req, res) => {
  try {
    const getMovie = await MovieSchema.find();
    res.json(getMovie);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

exports.CreateMovie = async (req, res) => {
  console.log(req.body);

  const newMovie = new MovieSchema({
    title: req.body.title,
    desc: req.body.desc,
  });

  try {
    const createdMovie = await newMovie.save();
    return res.status(201).json(createdMovie);
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

exports.getMovieById = async (req, res) => {
  console.log(req.params.id, "demo");
  try {
    const UpdateMovie = await MovieSchema.findById(req.params.id);

    console.log(UpdateMovie, "UpdateMovie");

    if (UpdateMovie === null) {
      return res.status(400).json({ message: "Cannot find Movies " });
    } else {
      return res.json(UpdateMovie);
    }
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

exports.UpdateMovie = async (req, res) => {
  console.log(req.body, "Request Body");

  // Validate the request body
  const { title, desc } = req.body;
  if (!title && !desc) {
    return res
      .status(400)
      .json({ message: "Title or Description is required" });
  }

  try {
    // Fetch the movie document you want to update
    const movie = await MovieSchema.findById(req.params.id);
    if (!movie) {
      return res.status(404).json({ message: "Movie not found" });
    }

    // Update the fields if they are provided
    if (title != null) movie.title = title;
    if (desc != null) movie.desc = desc;

    const updatedMovie = await movie.save();
    return res.json(updatedMovie);
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

exports.DeleteMovie = async (req, res) => {
  const deletedId = req.params.id;

  console.log(deletedId);

  try {
    // Find the movie by ID
    const movie = await MovieSchema.findById(deletedId);

    console.log(movie, "movie");
    if (!movie) {
      return res.status(404).json({ message: "Movie not found" });
    }

    // Delete the movie
    await MovieSchema.deleteOne({ _id: deletedId });
    return res.json({ message: "Movie Deleted Successfully" });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
