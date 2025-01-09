const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.json({ mgs: "Hello world" });
});


app.listen(8000, ()=>{
    console.log(`server running successfully in the port :  http://localhost : ${8000}`);
    
})