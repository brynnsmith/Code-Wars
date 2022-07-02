/* Given a mixed array of number and string representations of integers, add up the string integers and subtract this from the total of the non-string integers.

Return as a number. */

function divCon(x){
    let strings = x.filter(el => typeof(el) === 'string').map(el => Number(el))
    let nums = x.filter(el => typeof(el) === 'number')
    return nums.reduce((a, b) => a + b, 0) - strings.reduce((a, b) => a + b, 0)
    }