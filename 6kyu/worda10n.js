/* Write a function that takes a string and turns any and all "words" (see below) within that string of length 4 or greater into an abbreviation, following these rules:

    A "word" is a sequence of alphabetical characters. By this definition, any other character like a space or hyphen (eg. "elephant-ride") will split up a series of letters into two words (eg. "elephant" and "ride").
    The abbreviated version of the word should have the first letter, then the number of removed characters, then the last letter (eg. "elephant ride" => "e6t r2e").

Example

abbreviate("elephant-rides are really fun!")
//          ^^^^^^^^*^^^^^*^^^*^^^^^^*^^^*
// words (^):   "elephant" "rides" "are" "really" "fun"
//                123456     123     1     1234     1
// ignore short words:               X              X

// abbreviate:    "e6t"     "r3s"  "are"  "r4y"   "fun"
// all non-word characters (*) remain in place
//                     "-"      " "    " "     " "     "!"
=== "e6t-r3s are r4y fun!" */

function abbreviate(string) {
    let arr = string.split('-')
    let arr2 = string.split(' ')
    let abb
    if (string.length < 4) {
      return string
    }
    if (arr.length > 1 || arr2.length > 1) {
      abb = arr2.map(word => {
        if (word.length < 4){
          return word
        } else if (word.includes('-')) {
          word = word.split('-')
          for (let i = 0; i < word.length; i++) {
           word[i] = word[i][0]+(word[i].length-2)+word[i][word[i].length-1] 
          }
          return word[0]+'-'+word[word.length-1]
        } else if (word.includes(',')) {
          return word[0]+(word.length-3)+word[word.length-2]+','
        } 
        else {
          return word[0]+(word.length-2)+word[word.length-1]
        }
         })
        return abb.join(' ') 
    }
    return `${string[0]}${string.length-2}${string[string.length-1]}`
  }