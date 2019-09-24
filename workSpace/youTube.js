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


let temp = 'This is a string.';
console.log(strOccur(temp, 'i'));

/*
const countChars = (str, char) =>
    str.split('').filter(ch => ch === char).length;

const contains2To4 = (str, char) =>
    countChars(str, char) >= 2 && countChars(str, char) <= 4;

console.log(contains2To4('ooh!', 'o'));
*/
