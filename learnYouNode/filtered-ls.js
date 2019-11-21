let fs = require('fs');     // accessing the filesystem module and assigning it to a variable
let path = require('path');     // path module that helps derive file extensions from filenames

let folder = process.argv[2];       // targeting the 3rd argument in the command line and assigning it to a variable
let ext  = '.' + process.argv[3];   // targeting the 4th argument in the command line, adding a prefix of '.', and assigning it to a variable

fs.readdir(folder, function(err, files) {
    if(err) return console.error(err);      // check for an error and return and print an error message if an error occurs
    files.forEach( function(file) {         // .forEach() accepts a callback function. Callback function accepts a file as an argument, which is passed to this function from the files.forEach() method, which receives files from the fs.readdir() method
        if (path.extname(file) === ext) {   // if the file path equals the variable 'ext', file is looged to the console
            console.log(file);
        }
    })
})