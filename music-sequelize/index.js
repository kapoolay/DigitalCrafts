const express = require("express");
const app = express();
const models = require('./models');
const bodyParser = require("body-parser");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.get("/artist", function (req, response) {
  console.log('querying artist');
  models.artist.findAll().then(function (artists){
    console.log(artists);
    response.send(artists);
  });
});

app.put("/artist/:id", function (req, response) {
  console.log('updating artist: ' + req.params.id);
  let updateValues = {};

  if(req.body.name) {
    updateValues.name = req.body.name;
  }

  if(req.body.dob) {
    updateValues.dob = req.body.dob;
  }

  console.log(updateValues);

  models.artist.update(updateValues, { where: { id: req.params.id } })
  .then(function (updated) {
    console.log('updated success');
    console.log(updated);
    response.send(updated);
  });
});

app.post("/artist", function (req, response) {
  console.log('creating artist');
  console.log(req.body);
  models.artist.create({name: req.body.name, dob: req.body.dob})
  .then(function (artist){
    console.log(artist);
    response.send("new artist created with id: " + artist.id);
  });
});

app.listen(3000, function(){
  console.log('server listening on port 3000');
})