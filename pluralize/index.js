const pluralize = require('pluralize')

/**
 * 参数：(word, count, inclusive)
 * word: string The word to pluralize
 * count: number How many of the word exist
 * inclusive: boolean Whether to prefix with the number (e.g. 3 ducks)
 */

console.log(pluralize('test')) //= > "tests"
console.log(pluralize('test', 0)) //= > "tests"
console.log(pluralize('test', 1)) //= > "test"
console.log(pluralize('test', 5)) //= > "tests"
console.log(pluralize('test', 1, true)) //= > "1 test"
console.log(pluralize('test', 5, true)) //= > "5 tests"
console.log(pluralize('蘋果', 2, true)) //= > "2 蘋果"

// Example of asking whether a word looks singular or plural:
console.log(pluralize.isPlural('test')) //= > false
console.log(pluralize.isSingular('test')) //= > true
