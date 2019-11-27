const express = require('express');
const serverApp = express();
let count = 0;

serverApp.post('/increment', function(request, response) {
    count++;
    response.send('The count is ' + count);
});

serverApp.post('/decrement', function(request, response) {
    count--;
    response.send('The count is ' + count);
});

serverApp.get('/value', function(request, response) {
    response.send('The count is ' + count);
});

serverApp.listen(3000, function() {
    console.log('My server is listening on port 3000!')
});
