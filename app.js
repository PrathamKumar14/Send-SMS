//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const Nexmo = require("nexmo");
const socketIO = require("socket.io");

//******* Init Nexmo ********

const nexmo = new Nexmo({
  apiKey: "fb8d8bc8",
  apiSecret: "9nmhInTEzXeN8JTQ"
}, {debug: true});

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
  // res.send(req.body);
  // console.log(req.body);

  const number = req.body.number;
  const text = req.body.text;

  nexmo.message.sendSms(
    "918860875081", number, text, { type: "unicode" },
    (err, responseData) => {
      if(err) {
        console.log(err);
      }
      else {
        console.dir(responseData);
      }
    }
  );
});



// Start Server
const server = app.listen(3000, function(req, res){
  console.log("Server started at port 3000");
});
