let fs = require('fs');
let file = process.argv[2];

fs.readFile(file, function(err, content) {
    // fs.readFile(file, 'utf8', callback) can also be used 
    let numLines = content.toString().split('\n').length - 1;
    console.log(numLines);
});