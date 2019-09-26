/****************************************
 * Factor a Number

Write a function factors which is given a number and returns an array containing all its factors. What are factors? Numbers that can be multiplied together to get the original number.

https://www.khanacademy.org/math/pre-algebra/factors-multiples/divisibility-and-factors/v/finding-factors-of-a-number
 */

 function factors(num) {
     let arrFactors = [];
     for (let i = 0; i <= num; i++) {
         if (num % i === 0) {       // if the remainder is 0, then the integer is a factor
             arrFactors.push(i);    // pushes the value into the created array
         }
     }
     return 'The factors for ' + num + ' are: ' + arrFactors;
 }

 console.log(factors(9)); // prints 1, 3, and 9