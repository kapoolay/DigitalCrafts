JavaScript Exercises

You will be rewriting in JavaScript a series of exercises you've written in Python. There will also be a few new challenges. Because JavaScript's pop-up prompt is annoying and doesn't work in Node, we won't take in any user input. Instead, you will write each exercise as a function, and any required input will be supplied to the function as arguments.


https://dc-codecamp.herokuapp.com/course/fullstack/april2017/week5/day4/aa.javascript-exercises.exercise.md

JavaScript Exercises

You will be rewriting in JavaScript a series of exercises you've written in Python. There will also be a few new challenges. Because JavaScript's pop-up prompt is annoying and doesn't work in Node, we won't take in any user input. Instead, you will write each exercise as a function, and any required input will be supplied to the function as arguments.

Hello, you!

Write a function hello which given a name, says hello to the name. Use the following template:

function hello(name) {
  // put your code here
}
hello('Mustache');
Make the above program print

Hello, Mustache!
Hello, you! Part 2

Modify your hello program such that if no name is given: hello(), it will print "Hello, world!", otherwise it behaves the same as previously.

Madlib

Write a madlib function, which is given a name and a subject. It will return(not print) a new string: (name)'s favorite subject in school is (subject).

Example:

> madlib('Anushka', 'art');
'Anushka's favorite subject in school is art.'
Tip Calculator

Write a function tipAmount that is given the bill amount and the level of service (one of good, fair and poor) and returns the dollar amount for the tip. Based on:

good -> 20%
fair -> 15%
bad -> 10%
> tipAmount(100, 'good')
20
> tipAmount(40, 'fair')
6
Tip Calculator 2

Write a function totalAmount that takes the same arguments as tipAmount except it returns the total as the tip amount plus the bill amount. This function may make use of tipAmount as a sub-task.

> totalAmount(100, 'good')
120
> totalAmount(40, 'fair')
46
Tip Calculator 3

Write a function splitAmount that takes the bill amount and the level of service, and the number of people to split the bill between. It will return the final amount for each person.

> splitAmount(100, 'good', 5)
24
> splitAmount(40, 'fair', 2)
23
Print Numbers

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
Write two versions of the above function. One using a while loop and the other using a for loop.

Print a Square

Write a function printSquare which is given a size and prints a square of that size using asterisks.

> printSquare(5)
*****
*****
*****
*****
*****
Print a box

Write function printBox which is given a width and height and prints a hollow box of those given dimensions.

> printBox(6, 4)
******
*    *
*    *
******
Print a Banner

Write a function printBanner which is given some text and prints a banner with a border surrounding the text. The border has to stretch to the length of the text.

> printBanner('Welcome to DigitalCrafts')
****************************
* Welcome to DigitalCrafts *
****************************
Factor a Number

Write a function factors which is given a number and returns an array containing all its factors. What are factors?

https://www.khanacademy.org/math/pre-algebra/factors-multiples/divisibility-and-factors/v/finding-factors-of-a-number

Caesar Cipher

Write a function cipher which is given a string, an offset, and returns the Caesar cipher of the string.

> cipher('Genius without education is like silver in the mine')
'Travhf jvgubhg rqhpngvba vf yvxr fvyire va gur zvar'
Caesar Cipher 2

Write a function decipher which is given a string, an offset, and returns the original message.

> decipher('Travhf jvgubhg rqhpngvba vf yvxr fvyire va gur zvar')
'Genius without education is like silver in the mine'
Leetspeak

Write a function leetspeak which is given a string, and returns the leetspeak equivalent of the string. To convert text to its leetspeak version, make the following substitutions:

A => 4
E => 3
G => 6
I => 1
O => 0
S => 5
T => 7
> leetspeak('Leet')
l337
Long-long Vowels

Write a function, which is given a string, return the result of extending any long vowels to the length of 5.

> longLongVowels('Good')
'Goooood'
> longLongVowels('Cheese')
'Cheeeeese'
> longLongVowels('Man')
'Man'
Sum the numbers

Write a function sumNumbers which is given an array of numbers and returns the sum of the numbers.

> sumNumbers([1, 4, 8])
13
Just the positives

Write a function positiveNumbers which is given an array of numbers and returns a new array containing only the positive numbers within the given array.

> positiveNumbers([1, -3, 5, -3, 0])
[1, 5, 0]
> positiveNumbers([1, 2, 3])
[1, 2, 3]
> positiveNumbers([-1, -2, -3])
[]
Matrix Addition

Write a function matrixAdd which is given two two-dimensional arrays, and returns a new two-dimensional array containing their matrix sum.

> matrixAdd([[1, 3], [2, 4]], [[5, 2], [1, 0]])
[ [ 6, 5 ], [ 3, 4 ] ]
Matrix Multiplication

Write a function matrixMultiply which is given two two-dimensional arrays - you can assume the matricies are of size 2x2. It will return the result of matrix multiplication between the two given matricies.

https://www.khanacademy.org/math/precalculus/precalc-matrices/multiplying-matrices-by-matrices/v/matrix-multiplication-intro

> matrixMultiply([[2, 4], [3, 4]], [[5, 2], [3, 1]])
[ [22,  8], [27, 10] ]
Rock Paper Scissors

Write a function rockPaperScissors which takes the throw of player 1 and the throw of player 2. A throw can have the values of 'rock', 'paper', or 'scissors'. It will return 'player 1' if player 1 wins, 'player 2' if player 2 wins, and 'draw' if there is no winner.

> rockPaperScissors('rock', 'scissors')
'player 1'
> rockPaperScissors('rock', 'paper')
'player 2'
> rockPaperScissors('paper', 'paper')
'draw'
Tic Tac Toe

Write a function ticTacToe which takes a two-dimensional array of size 3x3. Each cell in the two dimensional array can be one of 'O', 'X', or null. The ticTacToe function will determine the winner by

returning 'O' if O makes a row returning 'X' if X makes a row return null if neither makes a row

> ticTacToe([
  ['O', 'O', 'O'],
  ['X', null, 'X'],
  [null, 'X', null]
  ])
'O'
> ticTacToe([
  ['O', 'X', 'O'],
  ['O', 'X', null],
  [null, 'X', null]
  ])
'X'
> ticTacToe([
  ['O', 'X', 'O'],
  ['O', 'O', null],
  [null, 'X', 'X']
  ])
null