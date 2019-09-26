/*
Matrix Addition

Write a function matrixAdd which is given two two-dimensional arrays, and returns a new two-dimensional array containing their matrix sum.

> matrixAdd([[1, 3], [2, 4]], [[5, 2], [1, 0]])
[ [ 6, 5 ], [ 3, 4 ] ]
*/

/* ~~~~~~~~ Luis's Code
function matrixAdd(matrixA, matrixB) {
    resultMatrix = [];
    let numRows = matrixA[0].length;
    let numColumns = matrixA.length;
  
    for (let rowIndex = 0; rowIndex < numRows; rowIndex++) {
      resultMatrix[rowIndex] = [];
      for (let columnIndex = 0; columnIndex < numColumns; columnIndex++) {
        resultMatrix[rowIndex][columnIndex] =
          matrixA[rowIndex][columnIndex] + matrixB[rowIndex][columnIndex];
      }
    }
  
    return resultMatrix;
  }
  
  //console.log(matrixAdd([[1, 3], [2, 4]], [[5, 2], [1, 0]]));
*/












/*
Matrix Multiplication

Write a function matrixMultiply which is given two two-dimensional arrays - you can assume the matricies are of size 2x2. It will return the result of matrix multiplication between the two given matricies.

https://www.khanacademy.org/math/precalculus/precalc-matrices/multiplying-matrices-by-matrices/v/matrix-multiplication-intro

> matrixMultiply([[2, 4], [3, 4]], [[5, 2], [3, 1]])
[ [22,  8], [27, 10] ]
*/

/* ~~~~~~~~~~~~~~ Luis's code
function matrixMultiply(matrixA, matrixB) {
    var resultMatrix = [];
  
    for (var rowIndex = 0; rowIndex < 2; rowIndex++) {
      resultMatrix[rowIndex] = [];
      for (var columnIndex = 0; columnIndex < 2; columnIndex++) {
        var sum = 0;
        for (var sumIndex = 0; sumIndex < 2; sumIndex++) {
          sum += matrixA[rowIndex][sumIndex] * matrixB[sumIndex][columnIndex];
        }
        resultMatrix[rowIndex][columnIndex] = sum;
      }
    }
    return resultMatrix;
  }
  */
  //console.log(matrixMultiply([[2, 4], [3, 4]], [[5, 2], [3, 1]]));