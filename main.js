const express = require("express");
const path = require("path");
const dotenv = require("dotenv");
const app = express();
dotenv.config({ path: path.join(__dirname, "config", "config.env") });

app.get("/", (req, res) => {
  res.json({ mgs: "Hello world" });
});


// CRUD Functionality

// R- Reading (View)
app.get('/movies', ()=>{

})

// c - Create
app.post('/movies', ()=>{

})


//  U - update
app.put('/movies/:id',()=>{

})

// D -Delete
app.delete('/movie/:id',()=>{

})

app.listen(process.env.PORT, () => {
  console.log(
    `Server listening to the port ${process.env.PORT} in ${process.env.NODE_ENV} `
  );
});
