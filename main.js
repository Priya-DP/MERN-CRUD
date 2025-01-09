const express = require("express");
const path = require("path");
const dotenv = require("dotenv");
const movie = require("./routes/movie-route");
const app = express();
dotenv.config({ path: path.join(__dirname, "config", "config.env") });

app.get("/", (req, res) => {
  res.json({ mgs: "Hello world" });
});

// router using
app.use("/", movie);

app.listen(process.env.PORT, () => {
  console.log(
    `Server listening to the port ${process.env.PORT} in ${process.env.NODE_ENV} `
  );
});
