/*
Sum the numbers

Write a function sumNumbers which is given an array of numbers and returns the sum of the numbers.

> sumNumbers([1, 4, 8])
13
*/

function sumNumbers(numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
      sum += numbers[i];
    }
  
    return sum;
  }
  
  //console.log(sumNumbers([1,2,3,4,5]));