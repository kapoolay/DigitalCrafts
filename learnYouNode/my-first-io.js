let fs = require('fs');      // accessing the filesystem module and assigning it to a variable

let arg = process.argv;
// .readFileSync() is a method to read contents of a file 
let content = fs.readFileSync(arg[2]);                      // note you can avoid the .toString() by passing 'utf8' as the
let numLines = content.toString().split('\n').length -1;    // second argument to readFileSync, then you'll get a String!
console.log(numLines);                                      // see shorthand version

// shorthand answer
// console.log(require('fs').readFileSync(process.argv[2], 'utf8').split('\n').length - 1);
