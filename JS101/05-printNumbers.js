/**********************************
 * Print Numbers

Write a function printNumbers which is given a start number and an end number. It will print the numbers from one to the other, one per line:

> printNumbers(1, 10)
1
2
3
4
5
6
7
8
9
10
 */

 function printNumbers(start,end) {
     for (let i = start; i <= end; i++) {
         console.log(i);
     }
 }

 printNumbers(1,11);