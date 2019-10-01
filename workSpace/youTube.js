//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

function numberCheck(num1, num2) {
    if (num1 === 100 || num2 === 100 || num1 + num2 === 100) {
        return true;
    } else {
        return false;
    }
}

// const numberCheck = (a,b) => a === 100 || b === 100 || (a + b) === 100; ---> Ternary Operation

//console.log(numberCheck(50,100));









//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Write a JavaScript program to get the extension of a filename.

function getFileExtension(str) {
    let fileType = str.slice(str.lastIndexOf('.'));
    return fileType;
}

//console.log(getFileExtension('index.html'));












//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Write a program to create a new string from a given string taking the first 3 characters and the last 3 characters of a string and adding them together. The string length must be 3 or more, if not, the original string is returned

function makeNewString(str) {
    if (str.length < 3) {
        return str;
    } else {
        let newString = str.slice(0,3) + str.slice(-3);
        return newString;
    }
}

//console.log(makeNewString('asdfghjkl'));
//console.log(makeNewString('asd'));
//console.log(makeNewString('ad'));












//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Write a JS program to extract the first half of a string of even length
/*
function extractHalf(string) {
    let firstHalf = string.slice(0, string.length / 2);
    return firstHalf;
}
*/

let extractHalf = (str) => str.slice(0, str.length / 2);

//console.log(extractHalf('asdfghjkl'));
















//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Write a program to concatenate 2 strings except their first character

function stringConcat(string1, string2) {
    let c = string1.slice(1) + string2.slice(1);
    return c;
}

//console.log(stringConcat('hello', 'mate'));  //returns elloate












//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Given 2 values, write a program to find out which one is nearest to 100

function nearest(num1, num2) {
    if (100 - num1 < 100 - num2) {
        return num1 + ' is nearer to 100';
    } else {
        return num2 + ' is nearer to 100';
    }
}

// const closestTo100 = (num1, num2) => (100 - num1) < (100 - num2) ? num1 : num2;   --> Ternary Operation

//console.log(nearest(75, 10));













//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Write a program to check if a given string contains 2 to 4 occurrences of a specified character

function strOccur(str, char) {
    let arrStr = str.split('');
    for (let i = 0; i < arrStr.length; i++) { // for every value in the array
        let count = arrStr[i].match(char);
        if (arrStr[i] === char) {           // if the value matches the character argument
            if (count >= 2 && count <= 4) {
                return true;
            }
        }
    }
    return false;
}


//let temp = 'This is a string.';
//console.log(strOccur(temp, 'i'));

/*
const countChars = (str, char) =>
    str.split('').filter(ch => ch === char).length;

const contains2To4 = (str, char) =>
    countChars(str, char) >= 2 && countChars(str, char) <= 4;

console.log(contains2To4('ooh!', 'o'));
*/










//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Write a program to reverse a string
// Return a string in reverse
// ex. reverseString('hello') === 'olleh'

/* Steps
1. Turn string into an array using .split()
2. Reverse the array using .reverse()
3. Turn array back into string using .join()
*/

/*
function reverseString(str) {       // Longer version of the same function
    let strArr = str.split('');
    let strRev = strArr.reverse();
    let result = strRev.join('');
    return result;
}
*/

function reverseString(str) {       // Shorter version of the same function
    return str.split('').reverse().join('');
}

string = 'hello';

//console.log(reverseString(string));










//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
/*
Write a short program that prints each number from 1 to 100 on a new line. 

For each multiple of 3, print "Fizz" instead of the number. 

For each multiple of 5, print "Buzz" instead of the number. 

For numbers which are multiples of both 3 and 5, print "FizzBuzz" instead of the number.
*/

function fizzBuzz() {
    for (let i = 1; i < 101; i++) {
        if (i % 15 === 0) {
            console.log('FizzBuzz');
        } else if (i % 5 === 0) {
            console.log('Buzz')
        } else if (i % 3 === 0) {
            console.log('Fizz')
        } else {
            console.log(i);
        }
    }
}

//fizzBuzz();










//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// CHALLENGE 2: VALIDATE A PALINDROME
// Return true if palindrome and false if not
// ex. isPalindrome('racecar') === 'true', isPalindrome('hello') == false

/*
function isPalindrome(str) {
    let revStr = str.split('').reverse().join('');
    
    if (revStr === str) {
        return true;
    } else {
        return false;
    }
}
*/


function isPalindrome(str) {
    let revStr = str.split('').reverse().join('');
    
    return revStr === str;
}




// console.log(isPalindrome('helleh'));










//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// CHALLENGE 3: REVERSE AN INTEGER
// Return an integer in reverse
// ex. reverseInt(521) === 125

// reverse the integer by first changing it into a string (.toString())
// change the new string into an array (.split())
// reverse the array (.reverse())
// turn the array back into a string (.join())
// change the reversed string back into an integer and return it

function revInteger(int) {
    let revStr = int.toString().split('').reverse().join('');

    return parseInt(revStr);
}

int = 521

console.log(revInteger(int));






