/* The vowel substrings in the word codewarriors are o,e,a,io. The longest of these has a length of 2. Given a lowercase string that has alphabetic characters only (both vowels and consonants) and no spaces, return the length of the longest vowel substring. Vowels are any of aeiou.

Good luck!

If you like substring Katas, please try:

Non-even substrings

Vowel-consonant lexicon */

function solve(s){
    const vowels = "aeiou";
    let cur = 0, max = 0
    for (let i = 0; i < s.length; i++) {
      if (vowels.includes(s[i])){
        cur++
        if (max < cur) {
          max = cur
        } 
        } else {
          cur = 0
      }
    }
     return max
   }