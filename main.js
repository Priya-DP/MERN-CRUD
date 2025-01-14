const express = require("express");
const movie = require("./routes/movie-route");
const bodyParser = require('body-parser');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.json({ mgs: "Hello world" });
});

// router using
app.use("/", movie);

module.exports = app;
