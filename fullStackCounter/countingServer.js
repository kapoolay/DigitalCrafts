const express = require("express");
const app = express();
const promise = require('bluebird');

// pg-promise initialization options:
const initOptions = {
  // Use a custom promise library, instead of the default ES6 Promise:
  promiseLib: promise, 
};

// Database connection parameters:
const config = {
  host: 'localhost',
  port: 5432,
  database: 'fullstackcounter',
  user: 'postgres',
};

const pgp = require('pg-promise')(initOptions);
const db = pgp(config);

app.use(express.static(__dirname + '/public'));


app.get("/value", function (req, response){
  db.one("SELECT SUM(current_count) AS count_sum FROM counter")
  .then(function (result) {
    console.log(result);
    response.send(result.count_sum);
  });
});

app.get("/increment", function (req, response){
  db.one(`INSERT INTO counter("current_count") VALUES(1); 
  SELECT SUM(current_count) AS count_sum FROM counter`)
  .then(function (result){
    console.log(result);
    response.send(result.count_sum);
  });
});

app.get("/reset", function (req, response) {
  db.result(`INSERT INTO counter(current_count) 
  VALUES (0 - (SELECT SUM(current_count) AS count_sum FROM counter))`)
  .then(function (result){
    response.json(0);
  });
});


app.get("/decrement", function (req, response){
  db.one(`INSERT INTO counter("current_count") VALUES(-1); 
  SELECT SUM(current_count) AS count_sum FROM counter`)
  .then(function (result){
    console.log(result);
    response.send(result.count_sum);
  });
});

// app.listen(3000, function(){
//   console.log("server listening on post 3000");
// });