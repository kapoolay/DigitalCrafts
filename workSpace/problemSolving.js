/******************
 * Question 1
 */

function greet(names) {
    for (let i = 0; i < names.length; i++) {
        let name = names[i];
        console.log('Hello, ' + name + '!');
    }
}

let names = ['Lachlan', 'Kim', 'Moira'];

greet(names);


/****************
 * Question 2
 */

function printInitials(arr) {
    let first = arr[0].charAt(0);
    let middle = arr[1].charAt(0);
    let last = arr[2].charAt(0);
    console.log(first + middle + last);
}

let fullName = ['Adam', 'Michael', 'Szaruga']

printInitials(fullName);


/****************
 * Question3
 */

 function arrIndex(arr) {
     let indexLastNum = -1
     for (let i = 0; i < arr.length; i++) {
         if (arr[i] === 1 ) {
            indexLastNum = i
         }
     } return indexLastNum;
 }

 let num = [0,1,0,1,1,1,0,0];

 console.log(arrIndex(num));




 /***************
  * Question 4
  */

  function biggestNumber(arr) {

  }