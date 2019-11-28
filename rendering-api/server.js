/*
*  Write a server that will respond with the appropriate JSON blob 
*  for the given rendering
*/
var express = require('express');
var app = express();
var albums = require('./abstractions/albums.js');
var circles = require('./abstractions/circles.js');
var movies = require('./abstractions/movies.js');
var nameTags = require('./abstractions/nameTags.js');
var poker = require('./abstractions/poker.js');
var rectangle = require('./abstractions/rectangle.js');
var restaurants = require('./abstractions/restaurants.js');
var students = require('./abstractions/students.js');
var surveys = require('./abstractions/surveys.js');
var tweets = require('./abstractions/tweets.js');


app.use(express.static(__dirname + '/public'));

// GET /api/albums
app.get('/api/albums', function(req, res, next) {
    console.log(albums);
    res.json(albums);
});

// GET /api/circles
app.get('/api/circles', function(req, res, next) {
    console.log(circles);
    res.json(circles);
});

// GET /api/movies
app.get('/api/movies', function(req, res, next) {
    console.log(movies);
    res.json(movies);
});

// GET /api/nametags
// let express = require('express');
// let app = express();
app.get('/api/nametags', function(req, res, next) {
    console.log(nameTags);
    res.json(nameTags);
});

// GET /api/poker
app.get('/api/poker', function(req, res, next) {
    console.log(poker);
    res.json(poker)
})

// GET /api/rectangle
app.get('/api/rectangle', function(req, res, next) {
    console.log(rectangle);
    res.json(rectangle);
});

// GET /api/restaurants
app.get('/api/restaurants', function(req, res, next) {
    console.log(restaurants);
    res.json(restaurants);
});

// GET /api/students
app.get('/api/students', function(req, res, next) {
    console.log(students);
    res.json(students);
});

// GET /api/surveys
app.get('/api/surveys', function(req, res, next) {
    console.log(surveys);
    res.json(surveys);
});

// GET /api/tweets
app.get('/api/tweets', function(req, res, next) {
    console.log(tweets);
    res.json(tweets);
});


app.listen(3000, function(){
    console.log('rendering-api is now listening on port 3000...');
});