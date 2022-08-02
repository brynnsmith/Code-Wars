/* Definition

A number is a Special Number if it’s digits only consist 0, 1, 2, 3, 4 or 5

Given a number determine if it special number or not .
Warm-up (Highly recommended)
Playing With Numbers Series
Notes

    The number passed will be positive (N > 0) .

    All single-digit numbers within the interval [1:5] are considered as special number.

Input >> Output Examples
specialNumber(2) ==> return "Special!!"

Explanation:
It's a single-digit number within the interval [1:5] .
specialNumber(9) ==> return "NOT!!"

Explanation:
Although, it's a single-digit number but Outside the interval [1:5] .
specialNumber(23) ==> return "Special!! */

function specialNumber(n){
    n = n.toString().split('')
    let not = []
    for (let i = 0; i < n.length; i++) {
      if (n[i] > 5 || n[i] < 0) {
        not.push(n[i])
      }
    }
    if (not.length > 0) {
      return 'NOT!!'
    }
    return 'Special!!'
  }

