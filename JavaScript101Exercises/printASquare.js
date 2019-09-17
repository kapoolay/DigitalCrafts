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
        let pattern = '';
        for (let j = 0; j < size; j++) {
            pattern += '*';
        }
        console.log(pattern);
    }
}

printSquare(5);