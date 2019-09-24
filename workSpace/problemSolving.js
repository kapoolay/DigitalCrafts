
/*****************
 * Question 1: Given an array of people's names ['Lachlan', 'Kim', 'Moira'], write a function that logs 'Hi, [name]!' for each person.
 * 
 * function printNames(namesArray){
// What is the length of an array? 
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/length
now how can I loop through the array
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration
}
 */
/*
function greet(names) {
    for (let i = 0; i < names.length; i++) {
        console.log('Hi, ' + names[i] + '!');
    }
}


 let people = ['Lachlan', 'Kim', 'Moira'];

 greet(people);



 /*****************
  * Question 2: Given an array of a first, middle, and last name ['Adam', 'Michael', 'Szaruga'], write a function that prints the person's initials.
  * .charAt() extracts the character at the given index position
  */
/*
function printInitials(arr) {
    let firstInitial = arr[0].charAt(0);
    let middleInitial = arr[1].charAt(0);
    let lastInitial = arr[2].charAt(0);
    console.log(firstInitial + middleInitial + lastInitial);
}

    let fullName = ['Kevin', 'Angulo', 'Capule'];

    printInitials(fullName);




  /*****************
   * Question 3: Given a list of 0's and 1's, [0,1,0,1,1,1,0,0], write a function that returns the index of the last 1 in the array.
   * 3. Could be done 2 ways
// So you are given a list
// You don't know how long it is but you know it consist of an array of integers 1 or 0
// You want to return the index of the last one.
// So you need to find a way to store that index and also have it change till you find the last one index // // that is equal to 1
   */
/*
   function LastOne(listNum) {
       let lastIndex = -1;
       for (let i = 0; i < listNum.length; i++) {
           if (listNum[i] === 1) {
               lastIndex = i;
           }
       }
       return lastIndex;
   } 

   let juans = [0,1,0,1,1,1,0,0];

   console.log(LastOne(juans));







   /*****************
    * Question 4: Given a list of positive numbers, [1,5,25,3,99,20], write a function that returns the biggest number
    */
/*
    function maxNum(arrNum) {
        let max = arrNum[0]              // you need a variable to store the first biggest number, arrNum[0] being the first number you see in the array
        for (let i = 0; i < arrNum.length; i++) {           // run a for loop thru the length of the array
            if (arrNum[i] > max) {                              // checking to see if the array value is greater than the max
                max = arrNum[i];                                    // if true, then replace the max value with the array value
            }
        }
        return max;     // return the max value
    }

    let big = [1,5,25,3,99,20];

    console.log(maxNum(big));
















/*****************    Counting Unique items in an array
 * Question 1: Given an array of student's birth years, [1991, 1984, 1984, 1989], return the most common birth year
 */

 function mostCommon(arr) {
     let birthYear = {};
     for (let i = 0; i < arr.length; i++) {
         let currentValue = arr[i];
         if (!birthYear[currentValue]) {
             birthYear[currentValue] = 0;
         }
         birthYear[currentValue]++;
     }
     return birthYear;
 }

 let years = [1991, 1984, 1984, 1989];

 console.log(mostCommon(years));







 /*****************
  * Question 2: Given a string 'This is a random string', write a function that returns a count of each character in the string
  */

function characterCount(sentence) {
    let letter = {};
    for (let i = 0; i < sentence.length; i++) {
        let currentItem = sentence[i];
        if(!letter[currentItem]) {
            letter[currentItem] = 0;
        }
        letter[currentItem]++
    }
    return letter;
}


  let phrase = 'This is a random string'

  console.log(characterCount(phrase));




  /*****************
  * Question 3: Given an array of olympic race results [{country: 'usa', time: 233}, {country: 'poland', time: 222},....], write a function that returns each country's best time
  */

function bestTime(arr) {
    for (let i = 0; i < arr.length; i++) {
        let country
    }
}



  /*****************
  * Question 4: Given a list of numbers, [-1,5,-25,-3,99,20], write a function that returns the count of positive numbers and negative numbers
  */

function positivesNegatives(arr) {
    let positiveCount = 0;
    let negativeCount = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            positiveCount++;
        } else {
            negativeCount++;
        }
    }
    return 'Positive:' + positiveCount + ' Negative:' + negativeCount;
}

let numArr = [-1,5,-25,-3,99,20]
console.log(positivesNegatives(numArr));








