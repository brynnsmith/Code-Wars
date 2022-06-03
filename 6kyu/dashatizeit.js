/* Given a variable n,

If n is an integer, Return a string with dash'-'marks before and after each odd integer, but do not begin or end the string with a dash mark. If n is negative, then the negative sign should be removed.

If n is not an integer, return an empty value.

Ex:

dashatize(274) -> '2-7-4'
dashatize(6815) -> '68-1-5' */

function dashatize(num) {
    let str = num.toString()
    let res = ""
    if (Math.abs(num) >= 0) {
    for (let i = 0; i < str.length; i++) {
      str[i] % 2 === 0 ? res += str[i] : res += `-${str[i]}-` 
    }
    while (res[0] === "-") {
      res = res.slice(1)
    }
    while (res[res.length-1] === "-") {
      res = res.slice(0, res.length-1)
    }
    return res.replace(/--/g, '-')
    }
    return 'NaN'
  }