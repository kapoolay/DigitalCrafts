let fs = require('fs');     // accessing the filesystem module and assigning it to a variable
let file = process.argv[2];     // targeting the 3rd argument in the command line and assigning it to a variable

fs.readFile(file, function(err, content) {
    // fs.readFile(file, 'utf8', callback) can also be used 
    let numLines = content.toString().split('\n').length - 1;
    console.log(numLines);
});