/* Very simple, given an integer or a floating-point number, find its opposite.

Examples:

1: -1
14: -14
-34: 34 */

const opposite = number => number < 0 ? Math.abs(number) : -Math.sign(number)