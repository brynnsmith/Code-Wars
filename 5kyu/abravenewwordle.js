/*Wordle is a game where users try to guess a hidden 5 letter word. Feedback is given for each guess, in the form of colored tiles, indicating when letters match or occupy the correct position.

see: https://www.nytimes.com/games/wordle/index.html
The Brief

Make a function that takes in a 5 letter guess and, comparing to a known solution, returns clues for the user to solve the wordle puzzle.
Requirements

    The function takes in two strings of 5 letters each, a guess and a solution.
    The function returns a string of 5 letters.
    The returned string is composed of letters each corresponding to a letter of the guess: 'b' (black) when the letter is not present in the answer; 'y' (yellow) when the letter is present but in a different location; and 'g' (green) when the letter is present and in the right location.

Duplicates

    A letter appearing in the correct place is always green, including if it appears elsewhere in the word.
    A letter can only be green or yellow as many times as it appears in the correct answer. Extra occurences of that letter are marked as 'b'. Below are some examples, see example tests for more:
    letters are evaluated left to right.

Guess: xxxxx
Answer: yxxxx
Expected Output: bgggg 
Explanation: extra letters marked as 'b'

guess: xxxxz 
answer:yyyyx 
expected output: ybbbb 
first x marked as 'y',  and each one as 'b' after */

function resolver(guess, solution){
    // Establish initial count of each letter in solution
    let count = [...solution].reduce((a, b) => (a[b] = (a[b] || 0) + 1, a), {})
    
    // Priority goes to green square return
    let res = guess.split('').map((el, i) => {
      if (el === solution[i]) {
        count[el] -= 1
        return el = 'g'
      } else {
        return el
      }
    })
    
    // Check result for yellow square return or default black
    let res2 = res.map((el, i) => {
      if (el === 'g' && solution[i] === guess[i]) {
        return el = 'g'
      } else if (solution.includes(el) && count[el] > 0) {
        count[el] -= 1
        return el = 'y'
      } else {
        return el = 'b'
      }
    })
    
    // Return result
    return res2.join('')
  }