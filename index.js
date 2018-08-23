const express = require("express");
const path = require("path");
const mongoose = require("mongoose");

//MONGOOSE SETUP
mongoose.connect('mongodb://localhost/node_articles');
const db = mongoose.connection;
//check connection
db.once('open', ()=>{
  console.log('Connected to MongoDB');
})
//check DB errors
db.on('error', (err)=>{
  console.log('error', err);
})
//MongoDB Models

const Article = require("./models/article")

//init app
const app = express();

//PORT
const port = process.env.PORT || 8080;

//view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

//ROUTES
app.get("/", (req, res) => {
  // let articles = [
  //   {
  //     id:1,
  //     title: 'Article One',
  //     author: "Alex Ivarsson",
  //     body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio, ducimus repudiandae. Recusandae veritatis sunt officiis et quia, impedit fugit ad modi fugiat. Ea, omnis dolore! Perferendis natus harum impedit ratione.'
  //   },
  //   {
  //     id:3,
  //     title: 'Samsung Korea',
  //     author: "Conan Ivarsson",
  //     body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio, ducimus repudiandae. Recusandae veritatis sunt officiis et quia, impedit fugit ad modi fugiat. Ea, omnis dolore! Perferendis natus harum impedit ratione.'
  //   },
  //   {
  //     id:3,
  //     title: 'Car for Sale',
  //     author: "Ivan Ivanov",
  //     body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio, ducimus repudiandae. Recusandae veritatis sunt officiis et quia, impedit fugit ad modi fugiat. Ea, omnis dolore! Perferendis natus harum impedit ratione.'
  //   },
  // ]
  Article.find({}, (err, articles)=>{
    if (err) {
      console.log('err', err);
    } else {
      res.render('index', {
        title: "Articles",
        articles: articles
      });
    }
  })
});

app.get("/articles/add", (req, res) => {
  res.render('add_article', {
    title: "Add Articles"
  });
});



//start server
app.listen(port, () => {
  console.log("app running on port " + port);
});
