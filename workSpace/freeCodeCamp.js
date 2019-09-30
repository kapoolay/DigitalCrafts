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
    let largestNum = arr[i][0];   //Create a second variable to hold the largest number and initialise it with the first number. This must be outside an inner loop so it won’t be reassigned until we find a larger number.
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