/* In this Kata, you will be given a string and your task will be to return a list of ints detailing the count of uppercase letters, lowercase, numbers and special characters, as follows.

Solve("*'&ABCDabcde12345") = [4,5,5,3]. 
--the order is: uppercase letters, lowercase, numbers and special characters.

More examples in the test cases.

Good luck! */

function solve(s){
 let countUppercase = 0, countLowercase = 0, countNumbers = 0, countSpecChar = 0
 for (let i = 0; i < s.length; i++) {
   if (s.charCodeAt(i) < 58 && s.charCodeAt(i) > 47) {
     countNumbers += 1
   } else if (s.charCodeAt(i) < 91 && s.charCodeAt(i) > 64) {
     countUppercase += 1
   } else if (s.charCodeAt(i) < 123 && s.charCodeAt(i) > 96) {
     countLowercase += 1
   } else {
     countSpecChar += 1
   }
 }
  return [countUppercase, countLowercase, countNumbers, countSpecChar]
}