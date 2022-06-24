/* Your job is to write a function which increments a string, to create a new string.

    If the string already ends with a number, the number should be incremented by 1.
    If the string does not end with a number. the number 1 should be appended to the new string.

Examples:

foo -> foo1

foobar23 -> foobar24

foo0042 -> foo0043

foo9 -> foo10

foo099 -> foo100

Attention: If the number has leading zeros the amount of digits should be considered. */

function incrementString (strng) {
    let letters = []
    let nums = []
    let arr = strng.split('')
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] == Number(arr[i])) {
        nums.push(arr[i])
      } else {
        letters.push(arr[i])
      }
    }
    if (nums.length > 0) {
      for (let j = 0; j < nums.length-1; j++) {
        if (nums[j] == 0 && nums[j + 1] != 9) {
          letters.push("0")
        }
      }
      let number = Number(nums.join('')) + 1
      return letters.join('').concat(number)
    } else {
      return letters.join('').concat(1)
    }
  }