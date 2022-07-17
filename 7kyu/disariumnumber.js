/* Definition

Disarium number is the number that The sum of its digits powered with their respective positions is equal to the number itself.
Task

Given a number, Find if it is Disarium or not .
Warm-up (Highly recommended)
Playing With Numbers Series
Notes

    Number passed is always Positive .
    Return the result as String

Input >> Output Examples

disariumNumber(89) ==> return "Disarium !!"

Explanation:

 Since , 81 + 92 = 89 , thus output is "Disarium !! */

 function disariumNumber(n){
    let arr = n.toString().split('')
    let sum = arr.map((el, i) => Math.pow(el, i + 1)).reduce((a, b) => a + b)
    if (sum === n) {
      return 'Disarium !!'
    } 
    return 'Not !!'
  }