const express = require('express');

const serverApp = express();

serverApp.get('/ping', function(request, response) {
    response.send('pong');
});

serverApp.listen(3000, function() {
    console.log('My server is listening on port 3000!');
})