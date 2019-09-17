function lvl5exercise1 () {
  // Push the string "hello" into the array and return it.
  var arr = [1, 'adam']
  arr.push('hello');          // push/adds to the end of the array 'hello'
  return arr;                 // returns [1, 'adam', 'hello']
}

function lvl5exercise2 () {
  // Remove the last element from the array and return it
  var arr = [1, 'adam']
  arr.pop();                // pop/removes the last value of the array
  return arr;               // returns [1]
}

function lvl5exercise3 () {
  // Return the length of the array
  var arr = [1, 'adam']
  let length = arr.length;          // declares length variable and assigns it the length of the arr variable
  return length;                    // returns the length of the array
}

function lvl5exercise4 () {
  // Return the index of "adam" in the array
  var arr = [1, 'adam']                     
  let indexAdam = arr.indexOf('adam');          // declares the indexAdam variable and assign it the index of 'adam' in the array
  return indexAdam;                             // returns 4
}
