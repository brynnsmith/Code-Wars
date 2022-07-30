/* A sequence or a series, in mathematics, is a string of objects, like numbers, that follow a particular pattern. The individual elements in a sequence are called terms. A simple example is 3, 6, 9, 12, 15, 18, 21, ..., where the pattern is: "add 3 to the previous term".

In this kata, we will be using a more complicated sequence: 0, 1, 3, 6, 10, 15, 21, 28, ... This sequence is generated with the pattern: "the nth term is the sum of numbers from 0 to n, inclusive".

[ 0,  1,    3,      6,   ...]
  0  0+1  0+1+2  0+1+2+3

Your Task

Complete the function that takes an integer n and returns a list/array of length abs(n) + 1 of the arithmetic series explained above. Whenn < 0 return the sequence with negative terms.
Examples

 5  -->  [0,  1,  3,  6,  10,  15]
-5  -->  [0, -1, -3, -6, -10, -15]
 7  -->  [0,  1,  3,  6,  10,  15,  21,  28] */

 function sumOfN(n) {
    // Parameter will be a number, positive or negative
    //// The sequence being used is [0, 1, 3, 6, 10, 15, 11, 28, ...] - 0  0+1  0+1+2  0+1+2+3 ...
    // Result will be an array with the terms of the sequence (length of array = abs(n) + 1)
    // Example - given the number 3, the returned array would be [0, 1, 3, 6]
    // Pseudo Code
    //// Declare variable to hold array
      let arr = []
    //// Establish sequence to generate array
      // Declare variable for count and incrementing number
      let count = 0, i = 0
      // While loop to run function until i === Math.abs(n)+1
      while (i < Math.abs(n) + 1) {
        // Push sequence value to resulting array
        arr.push(count + i)
        // Add incrementing value to count
        count += i
        // Move the incrementing value forwards
        i++
      }
      // Choose return condition (positive or negative based on n and return result)
      if (n > 0) { return arr }
      else { return arr.map(num => num > 0 ? num * -1 : num) }
    };