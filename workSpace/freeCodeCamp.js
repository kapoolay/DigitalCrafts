//~~~~~~~~~~~~~~~~~~~~ Longest Length of word in sentence

function findLongestWordLength(str) {
  let strArr = str.split(' ');    // turn string into an array
  let maxLength = 0;    // declare a variable to keep track of the max length starting at 0

  for (let i = 0; i < strArr.length; i++) {   //loop thru the array 
    if (strArr[i].length > maxLength) {     //if the length of the current array value is greater than the current longestword
      maxLength = strArr[i].length
    }
  }
  return maxLength;
}


sentence = "The quick brown fox jumped over the lazy dog";

console.log(findLongestWordLength(sentence));









//~~~~~~~~~~~~~~~~~~~~ Return largets numbers in arr

function largestNum(arr) {
  let results = []; //Create a variable to store the results as an array

  for (let i = 0; i < arr.length; i++) {  //Create an outer loop to iterate through the outer array.
    let largestNum = arr[i][0];   //Create a second variable to hold the largest number and initialize it with the first number. This must be outside an inner loop so it won’t be reassigned until we find a larger number.
    for (let j = 1; j < arr[i].length; j++) {   //Create said inner loop to work with the sub-arrays.
      if (arr[i][j] > largestNum) {   //Check if the element of the sub array is larger than the currently stored largest number.
        largestNum = arr[i][j];   //If so, then update the number in the variable.
      }
    }
    results[i] = largestNum;    //After the inner loop, save the largest number in the corresponding position inside of the results array.
  }
  
  return results;   //And finally return said array.
}

largestOfFour = [[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]];

console.log(largestNum(largestOfFour));









/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ 
Check if a string (first argument, str) ends with the given target string (second argument, target).

This challenge can be solved with the .endsWith() method, which was introduced in ES2015. But for the purpose of this challenge, we would like you to use one of the JavaScript substring methods instead.
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */

function confirmEnding(str, target) { 
  return str.slice(str.length - target.length) === target;
}

console.log(confirmEnding('Kevin Capule', 'ule'));

/*
First we use the slice method copy the string.
In order to get the last characters in str equivalent to the target’s length we use the slice method.
The first parameter inside the slice method is the starting index and the second parameter would be the ending index.
In this case we only include one parameter which it will copy everything from the starting index.
We substract the length of str and the length of target, that way, we shall get the last remaining characters equivalent to the target’s length.
Finally we compare the return result of slice to target and check if they have the same characters.
*/










/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ 
Repeat a given string str (first argument) for num times (second argument). Return an empty string if num is not a positive number.

Remember to use Read-Search-Ask if you get stuck. Write your own code.
The built-in repeat()-method should not be used
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */

function repeatStringNumTimes(str, num) {
  let repeatedString = '';    // the string parameter cannot be edited, so you need to store the repeated string in a new variable
  while (num > 0) {           // do a loop if it's a positive number
    repeatedString += str;    // each iteration adds the string to the repeated string variable
    num--;                    // after each iteration, subtract 1. This loop will end once the num hits 0
  }
  return repeatedString;      // if the num < 0, return the empty string
}

console.log(repeatStringNumTimes("abc", 3));