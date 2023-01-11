const express = require("express");
const bodyParser = require("body-parser");
// const date = require(__dirname + "/date.js");
const mongoose = require("mongoose");
const lod=require("lodash"); //lodash is used to format route strings
const app = express();

app.set('view engine', 'ejs'); //ejs is the templating used

app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(express.static("public"));


app.get('/music-system', (req,res)=>{
  res.render("music-system");
});

app.get('/posture', (req,res)=>{
  res.render("posture");
})

app.get('/pomodoro', (req,res)=>{
  res.render("pomodoro");
})

app.get("/", (req, res)=>{
    res.render('home');
});

app.get("/sticky-notes", (req, res)=>{
  res.render('sticky-notes');
});

app.get("/todo-list", (req, res)=>{
  res.render('todo-list');
});


app.listen(8080, ()=>{
    console.log(`Server started at port 8080`);
});