const express = require("express");
const app = express();

let counter = 0;

app.use(express.static(__dirname + '/public'));


app.get("/value", function (req, response){
  response.send(counter.toString());
});

app.get("/increment", function (req, response){
  counter++;
  response.send(counter.toString());
});

app.get("/reset", function (req, response){
  counter = 0;
  response.send(counter.toString());
});


app.get("/decrease", function (req, response){
  counter--;
  response.send(counter.toString());
});

app.listen(3000, function(){
  console.log("server listening on post 3000");
});