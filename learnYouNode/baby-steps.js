let arg = process.argv;
// console.log(arg);

let sum = 0;
for (i = 2; i < arg.length; i++) {
    sum += Number(arg[i]);
}

console.log(sum); 

