let mymodule = require('./mymodule.js');
let folder = process.argv[2];      // assigns the 3rd argument passed from the command line to a variable
let fileExt = process.argv[3];        // assigns the 4th argument passed from the command line to a variable

mymodule(folder, fileExt, function(err, list) {      // folder, fileExt, and the callback function are passed in as arguments
    if (err) {
        return console.log('There was an error:', err);
    }
    list.forEach(function(file) {
        console.log(file)
    })
})