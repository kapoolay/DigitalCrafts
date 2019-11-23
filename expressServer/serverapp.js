// Create server using express

const express = require('express');

const serverApp = express();

serverApp.use(express.static(__dirname + '/public'));       // "__dirname" is the direct path name of the serverapp location

serverApp.listen(3000, function() {
    console.log('My server is listening on port 3000');
});