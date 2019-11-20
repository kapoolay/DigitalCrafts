let fs = require('fs');

let arg = process.argv;

let content = fs.readFileSync(arg[2]);
let numLines = content.toString().split('\n').length -1;
console.log(numLines);




