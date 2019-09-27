// TIP:
// A predicate function is a function that returns boolean true or false
// They are useful for improving the semantics of checking for conditions.
// Examples:
// - isUserLoggedIn(user)
// - isString(s)
// - isValidZipCode(code)
// etc

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Write a function "isVowel" that takes a character (i.e. a string of length 1)
// as input and returns true if it is a vowel, false otherwise.
//
// Useful resource:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String
//
// Examples:
// isVowel('c') --> false
// isVowel('e') --> true
// isVowel('A') --> true
// isVowel(99) --> false
// isVowel({e: 'Elephant'}) --> false

function isVowel(letter) {
    switch(letter.toUpperCase()) {      // if the parameter 'letter'(automatically switched to Uppercase)
        case 'A':                       // is A, E, I, O, or U then return true
        case 'E':
        case 'I':
        case 'O':
        case 'U':
            return true;
        default:
            return false;               // otherwise return false

    }
}

//console.log(isVowel('i'));



// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Write two functions: "isEven" and "isOdd" that take a number argument and
// return true or false if the number is even or odd, respectively.
// The functions should return "false" if the number passed in is not an integer.
//
// Examples:
// isEven(100) --> true
// isEven(1) --> false
// isEven(-2) --> true
// isEven('banana') --> false
// isOdd(5) --> true
// isOdd('7') --> false
// isOdd(3.14) --> false


function isEven(num) {
    if (num % 2 === 0) {
        return true;
    } else if (num % 2 !== 0) {
        return false;
    } else {
        return 'Entry not valid'
    }
}


/* Switch Statement
function isEven(num) {
    switch(num % 2) {
        case 0:
            return true;
        default:
            return false;
    }
}
*/

console.log(isEven(34));



/*
function isOdd(num) {
    if (num % 2 !== 0) {
        return true;
    } else if (num % 2 === 0) {
        return false;
    } else {
        return 'Entry invalid'
    }
}
*/

// Switch Statement
function isOdd(num) {
    switch(num % 2) {
        case 1:
            return true;
        default:
            return false;
    }

}

console.log(isOdd(7));

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Write a function "isCapitalCity" that takes two arguments: a US state and a city name
// and returns true or false if the city name is the capital of the state.
// The function should return false if the state name is not a valid US state.
//
// Hint 1: What is the best data structure to store this information? Object? Array? etc.
// Hint 2: This problem can be solved without using a "for" or "while" loop.
// Hint 3: Can you find this data online in JSON format? How might that be helpful?
//
// Examples:
// isCapitalCity('Texas', 'Austin') --> true
// isCapitalCity('Texas', 'Houston') --> false
// isCapitalCity('Alaska', 'Juneau') --> true
// isCapitalCity('Strawberry', 'Mango') --> false

let usStates = {
    'Alabama': 'Montgomery',
    'Alaska': 'Juneau',
    'Arizona': 'Phoenix',
    'Arkansas': 'Little Rock',
    'California': 'Sacramento',
    'Colorado': 'Denver',
    'Connecticut': 'Hartford',
    'Delaware': 'Dover',
    'Florida': 'Tallahassee',
    'Georgia': 'Atlanta',
    'Hawaii': 'Honolulu',
    'Idaho': 'Boise',
    'Illinois': 'Springfield',
    'Indiana': 'Indianapolis',
    'Iowa': 'Des Moines',
    'Kansas': 'Topeka',
    'Kentucky': 'Frankfort',
    'Louisiana': 'Baton Rouge',
    'Maine': 'Augusta',
    'Maryland': 'Annapolis',
    'Massachusetts': 'Boston',
    'Michigan': 'Lansing',
    'Minnesota': 'Saint Paul',
    'Mississippi': 'Jackson',
    'Missouri': 'Jefferson City',
    'Montana': 'Helana',
    'Nebraska': 'Lincoln',
    'Nevada': 'Carson City',
    'New Hampshire': 'Concord',
    'New Jersey': 'Trenton',
    'New Mexico': 'Santa Fe',
    'New York': 'Albany',
    'North Carolina': 'Raleigh',
    'North Dakota': 'Bismarck',
    'Ohio': 'Columbus',
    'Oklahoma': 'Oklahoma City',
    'Oregon': 'Salem',
    'Pennsylvania': 'Harrisburg',
    'Rhode Island': 'Providence',
    'South Carolina': 'Columbia',
    'South Dakota': 'Pierre',
    'Tennessee': 'Nashville',
    'Texas': 'Austin',
    'Utah': 'Salt Lake City',
    'Vermont': 'Montpelier',
    'Virginia': 'Richmond',
    'Washington': 'Olympia',
    'West Virginia': 'Charleston',
    'Wisconsin': 'Madison',
    'Wyoming': 'Cheyenne'
  }


function isCapitalCity (state, city) {
    if (!usStates[state]) return false          // if the parameter 'state' doesn't match the property value in the object, return false
    if (usStates[state] === city) return true       // if the parameter 'state matches the property in the usStates object AND the parameter 'city' matches the value of the property, return true
    else return false       //otherwise, return false
  }

//console.log(isCapitalCity('Texas', 'Austin'));
