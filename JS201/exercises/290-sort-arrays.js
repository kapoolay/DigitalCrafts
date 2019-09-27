// TIP: check out this reference for how to sort arrays:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Write a function "alphaSort" that sorts an array of strings alphabetically.
//
// Examples:
// alphaSort(['b', 'a', 'c'])
// > ['a', 'b', 'c']

let alphaSort = ['b', 'a', 'c'];

let sortABC = alphaSort.sort()

console.log(sortABC);



// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Write a function "strLengthSort" that sorts an array of strings by how long
// each string is. Put the shortest strings first.
//
// Examples:
// strLengthSort(['Apple', 'Banana', 'Cherry'])
// > ['Apple', 'Cherry', 'Banana']

let strLengthSort = ['Apple', 'Bananas', 'Cherry'];

let sortLength = strLengthSort.sort(function(a,b) {
    return b.length - a.length;
})

console.log(sortLength);


// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Write a function "sumSort". Given an array of array of numbers like:
// var arr = [
//   [1, 3, 4],
//   [2, 4, 6, 8],
//   [3, 6]
// ];
//
// Sort the array by the sum of each inner array. For the above example, the
// respective sums for each inner array is 8, 20, and 9.
//
// Example:
// sumSort([
//   [9, 1, 9],
//   [2],
//   [4, 5]
// ])
// > [[2], [4, 5], [9, 1, 9]]

var arr = [
    [1, 3, 4],
    [2, 4, 6, 8],
    [3, 6]
];

console.log(arr.sort(function (a, b) {
    let sum1 = 0;
    let sum2 = 0;

    a.forEach(function(element) {
        sum1 += element;
    });

    b.forEach(function(element) {
        sum2 += element;
    });

    return sum1 - sum2;
}))