const express = require("express");
const router = express.Router();

// CRUD Functionality

// R- Reading (View)
router.get("/movies", (req, res) => {
  res.send("view movies...!");
});

// c - Create
router.post("/movies", (req, res) => {
  res.send("create movie successfully");
});

//  U - update
router.put("/movies/:id", (req, res) => {
  res.send("move update properly");
});

// D -Delete
router.delete("/movie/:id", (req, res) => {
  res.send("Movie delete successfully");
});

module.exports = router;
