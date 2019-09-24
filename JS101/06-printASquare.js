/****************************************
 * Print a Square

Write a function printSquare which is given a size and prints a square of that size using asterisks.

> printSquare(5)
*****
*****
*****
*****
*****
 */


function printSquare(size) {
    for (let i = 0; i < size; i++) {        // for every loop, 
        for (let j = 0; j < size; j++) {    // for each line,
            pattern = '*'.repeat(size);     // print out as many '*' as the size(parameter)
        }
        console.log(pattern);  // CANNOT be inside the inner for loop, otherwise it will print size^2(size x size)
    }
}

/* ~~~ Luis's code
function printSquare(size) {
    for (i = 0; i < size; i++) {
      let asterisks = "";
      for (j = 0; j < size; j++) {
        asterisks += "*";
      }
      console.log(asterisks);
    }
  }
*/

printSquare(5);





/****************************************
Print a box

Write function printBox which is given a width and height and prints a hollow box of those given dimensions.

> printBox(6, 4)
******
*    *
*    *
******
*/


function printBox(width, height) {
    for (let i = 0; i < height; i++) {    //loop thru as many times as the height
        if (i === 0 || i === height -1) {  // for the first and last line,
            console.log('*'.repeat(width));  // print '*' to the amount of the width using .repeat()
        } else {        // otherwise print 'a space' to the same width-2 in between 2 '*' 
            console.log('*' + ' '.repeat(width-2) + '*'); // the '-2' accounts for the both the first and last column, which creates the gap/open space
        }
    }
}

/*
function printBox(width, height) {
  for (i = 0; i < height; i++) {
    let asterisks = "";

    for (j = 0; j < width; j++) {
      if (i == 0 || i == height - 1) {
        asterisks += "*";
      } else if (j == 0 || j == width - 1) {
        asterisks += "*";
      } else {
        asterisks += " ";
      }
    }
    console.log(asterisks);
  }
}
*/

printBox(6,4);






/****************************************
Print a Banner

Write a function printBanner which is given some text and prints a banner with a border surrounding the text. The border has to stretch to the length of the text.

> printBanner('Welcome to DigitalCrafts')
****************************
* Welcome to DigitalCrafts *
****************************

*/

function printBanner(enterText) {
    console.log('*'.repeat(enterText.length+4))     //print the '*' the same length as the text length, with an additional of 4 spaces ~~~~ this prints the line/pattern above the text
    console.log('* ' + enterText + ' *');
    console.log('*'.repeat(enterText.length+4))     //same as the first line ~~~ prints the line/pattern below the text
}


printBanner('Welcome to DigitalCrafts')