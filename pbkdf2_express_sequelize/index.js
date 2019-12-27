const express = require("express");
const app = express();
const models = require('./models');
const bodyParser = require("body-parser");

var pbkdf2 = require('pbkdf2');
var crypto = require('crypto');
var salt = crypto.randomBytes(20).toString('hex');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(function (request, response, next) {
  console.log(request.method, request.path);
  next();
});

function encryptionPassword(req, response, next){
  var key = pbkdf2.pbkdf2Sync(
    req.body.password, salt, 36000, 256, 'sha256'
  );
  var hash = key.toString('hex');

  req.body.password = `pbkdf2_sha256$36000$${salt}$${hash}`;
  next();
}

app.post("/sign-up", encryptionPassword, function (req, response) {
  models.user.create({ username: req.body.username, password: req.body.password})
    .then(function (user) {
      response.send(user);
    });
});

app.post("/login", encryptionPassword, function (req, response) {
  models.user.findOne({where: {username: req.body.username, password: req.body.password}})
  .then(function (user) {

    console.log("There was an user");
    console.log(user);
    response.send(user);
  });
})

app.listen(3000, function () {
  console.log('server listening on port 3000');
})