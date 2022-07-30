/* Acknowledgments:

I thank yvonne-liu for the idea and for the example tests :)
Description:

Encrypt this!

You want to create secret messages which can be deciphered by the Decipher this! kata. Here are the conditions:

    Your message is a string containing space separated words.
    You need to encrypt each word in the message using the following rules:
        The first letter must be converted to its ASCII code.
        The second letter must be switched with the last letter
    Keepin' it simple: There are no special characters in the input.

Examples:

encryptThis("Hello") === "72olle"
encryptThis("good") === "103doo"
encryptThis("hello world") === "104olle 119drlo" */

var encryptThis = function(text) {
    let arr = text.split(' ').map(el => el.split('').map((a, i) => {
      if (i === 0) {
        return el.charCodeAt(a)
      } else if (i === 1) {
        return el[el.length-1]
      } else if (i === el.length-1) {
        return el[1]
      } else {
        return a
      }
    }).join(''))
    return arr.join(' ')
  }