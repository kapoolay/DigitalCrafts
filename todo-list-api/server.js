var express = require('express');
var bodyParser = require('body-parser');

var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

var todoList = [
    {
        id: 1,
        todo: "Implement a REST API"
    }
];

// GET /api/todos
app.get('/api/todos', function(req, res, next) {
    console.log(todoList);
    res.send(todoList);
});

// GET /api/todos/:id
app.get('/api/todos/:id', function(req, res, next) {
    res.send(todoList[req.params.id])
})

// POST /api/todos
app.post('/api/todos', function(req, res, next) {
    res.send('Post is working');
    console.log('trying to post');
});

// PUT /api/todos/:id

// DELETE /api/todos/:id

app.listen(3000, function(){
    console.log('Todo List API is now listening on port 3000...');
})