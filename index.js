const express = require("express");
//init app
const app = express();

//PORT
const port = process.env.PORT || 8080;



//ROUTES
app.get("/", (req, res)=>{
  res.send("hello world")
})



//start server
app.listen(port, ()=>{
  console.log("app running on port " + port)
})
