/* Modify the kebabize function so that it converts a camel case string into a kebab case.

kebabize('camelsHaveThreeHumps') // camels-have-three-humps
kebabize('camelsHave3Humps') // camels-have-humps

Notes:

    the returned string should only contain lowercase letters */

    function kebabize(str) {
        let arr = str.split('').map((el, i) => {
          if (str.charCodeAt(i) < 96 && str.charCodeAt(i) > 64) {
            return `-${el.toLowerCase()}`
          } else if (str.charCodeAt(i) < 64) {
            return ''
          } else {
            return el
          }
        })
        if (arr.join('').charCodeAt(0) == 45) {
          return arr.join('').slice(1, arr.length + 1)
        } else {
          return arr.join('')
        }
      }