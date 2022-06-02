/* Complete the solution so that the function will break up camel casing, using a space between words.
Example

"camelCasing"  =>  "camel Casing"
"identifier"   =>  "identifier"
""             =>  "" */

function solution(string) {
    let res = ""
        for (let i = 0; i < string.length; i+= 1) {
          string[i].charCodeAt() > 96 ? res += string[i] : res += ` ${string[i]}`
        }
    return res
  }