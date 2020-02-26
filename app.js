//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const nexmo = require("nexmo");
const socketIO = require("socket.io");

// Init app
const app = express();

app.use(express.static(__dirname + "/public"));

app.set('view engine', 'html');
app.engine('html', ejs.renderFile);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

//************* Code **************

app.get("/", function(req, res){
  res.render("index");
});

app.post("/", function(req, res){
  res.send(req.body);
  console.log(req.body);
});



// Start Server
const server = app.listen(3000, function(req, res){
  console.log("Server started at port 3000");
});
