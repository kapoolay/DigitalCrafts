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
    user: 'postgres'
};

// Load and initialize pg-promise:
const pgp = require('pg-promise')(initOptions);

// Create the database instance:
const db = pgp(config);

// function handleQuery() {
//   db.query();
//   pgp.end();
// }

app.use(express.static(__dirname + '/public'));


app.get("/value", function (req, response){
db.query('SELECT SUM(current_count) AS count_sum FROM counter')
  .then(function(result) {
    console.log(result);
    response.send(result.current_sum);
  });
});

app.get("/increment", function (req, response){
  db.result(`INSERT INTO counter('current_count') VALUES(1)`)
  .then(function(result) {
    console.log(result);
    response.send(result);
  });
});

// app.get("/reset", function (req, response){
//   counter = 0;
//   response.send(counter.toString());
// });


// app.get("/decrease", function (req, response){
//   counter--;
//   response.send(counter.toString());
// });

app.listen(3000, function(){
  console.log("server listening on post 3000");
});