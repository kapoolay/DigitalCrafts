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
    for (let i = 0; i < size; i++) {
        for (let j = 0; j < size; j++) {
            pattern = '*'.repeat(size);
        }
        console.log(pattern);
    }
}

//printSquare(5);





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
    for (let i = 0; i < height; i++) {    //loop thru the height
        if (i === 0 || i === height -1) {  // for the first and last line, print '*' to the amount of the width using .repeat()
            console.log('*'.repeat(width));  
        } else {        // otherwise print 'a space' to the same width-2 in between 2 '*' 
            console.log('*' + ' '.repeat(width-2) + '*'); 
        }
    }
}

printBox(10,4);






/****************************************
Print a Banner

Write a function printBanner which is given some text and prints a banner with a border surrounding the text. The border has to stretch to the length of the text.

> printBanner('Welcome to DigitalCrafts')
****************************
* Welcome to DigitalCrafts *
****************************

*/

function printBanner(enterText) {
    console.log('*'.repeat(enterText.length+4))
    for (let i = 0; i < enterText.length; i++) {
        if (i === 0 ) {
            console.log('* '+enterText+' *');
        } 
    }
    console.log('*'.repeat(enterText.length+4))
}

/*
function printBanner(enterText) {
    console.log('*'.repeat(enterText.length+4))
            console.log('* '+ enterText +' *');
    console.log('*'.repeat(enterText.length+4))
}
*/

//printBanner('Welcome to DigitalCrafts')