/* rs as a nice clean string with spaces and capitals like so:

"Burger Fries Chicken Pizza Pizza Pizza Sandwich Milkshake Milkshake Coke"

The kitchen staff expect the items to be in the same order as they appear in the menu.

The menu items are fairly simple, there is no overlap in the names of the items:

1. Burger
2. Fries
3. Chicken
4. Pizza
5. Sandwich
6. Onionrings
7. Milkshake
8. Coke */

function getOrder(input) {
    let menu = ["Burger", "Fries", "Chicken", "Pizza", "Sandwich", "Onionrings", "Milkshake", "Coke"];
    let order = []
    let count 
    for (let i = 0; i < menu.length; i++) {
        if (input.match(menu[i].toLowerCase())) {
          count = (input.split(menu[i].toLowerCase()) || null).length - 1
          for (let j = 0; j < count; j++) {
            order.push(menu[i]) 
          } 
      }
    }
    return order.join(' ')
  }