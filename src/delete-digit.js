const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const str = `${n}`;
  const numbers = Array.from(
    { length: str.length },
    (_, i) => +str.replace(str[i], '')
  );
  return Math.max(...numbers);
}

module.exports = {
  deleteDigit
};
