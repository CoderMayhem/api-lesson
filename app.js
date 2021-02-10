const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");
const app = express();


app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended : true}));


app.get("/", function(req, res){
    res.sendFile(__dirname + "/signup.html");
});

app.post("/", function(req, res){
  var firstName = req.body.fname;
  var lastName = req.body.lname;
  var email = req.body.email;
});

app.listen("3000", function(){
  console.log("Server is listening on port : 3000");
});
