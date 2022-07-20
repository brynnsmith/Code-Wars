/* Complete the method which accepts an array of integers, and returns one of the following:

    "yes, ascending" - if the numbers in the array are sorted in an ascending order
    "yes, descending" - if the numbers in the array are sorted in a descending order
    "no" - otherwise

You can assume the array will always be valid, and there will always be one correct answer. */

const isSortedAndHow = array => {
    let count = 0
    for (let i = 0; i < array.length; i++) {
      if (array[i + 1] >= array[i]) {
        count += 1
      } else if (array[i + 1] <= array[i]) {
        count -= 1
      }
    } return count === array.length-1 ? 'yes, ascending' : Math.abs(count) === array.length-1? 'yes, descending' : 'no'
  }