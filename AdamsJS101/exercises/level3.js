function lvl3exercise1 () {
  // Create a "hello" and a "world", return the concatenation of the two
  let hello = 'hello';          // declares the hello variable as 'hello'
  let world = 'world';          // declares the world variable as 'world'
  return hello + world;         // concatenates or combines both variables
}

function lvl3exercise2 () {
  // Create a "hello" and a 12, return the concatenation of the two
  let hello = 'hello';          // declares the hello variable as 'hello'
  let num = 12;                 // declares the num variable as the integer 12
  return hello + num;           // returns 'hello12'
}

function lvl3exercise3 () {
  // Create a variable that equals 12 and convert it to a string with concatenation. Return it.
  let num = 12;             // declares num as the variable 12
  let str = '' + num;       // declares the str variable as concatenation of an emtpy string with the variable num
  return str;               // returns '12'; it has now been converted into a string due to type coercion
}

function lvl3exercise4 () {
  // Create a "hello world!" string. Return the length of the string
  let greet = 'hello world!';         // declares greet variable as 'hello world!'
  return greet.length;                // returns the length of 'hello world!'
}

function lvl3exercise5 () {
  // Create a "hello world!" string. Return the index of the word "world".
  let greet = 'hello world!';                   // declares greet variable as 'hello world!'
  let indexWorld = greet.indexOf('world');      // declares indexWorld variable and assigns it the index/starting point of 'world' in the variable greet
  return indexWorld;                            // returns 6
}
