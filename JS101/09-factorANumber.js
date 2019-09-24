/****************************************
 * Factor a Number

Write a function factors which is given a number and returns an array containing all its factors. What are factors? Numbers that can be multiplied together to get the original number.

https://www.khanacademy.org/math/pre-algebra/factors-multiples/divisibility-and-factors/v/finding-factors-of-a-number
 */

 function factors(num) {
     let arrFactors = [];
     for (let i = 0; i <= num; i++) {
         if (num % i === 0) {
             arrFactors.push(i);
         }
     }
     return 'The factors for ' + num + ' are: ' + arrFactors;
 }

 console.log(factors(200));