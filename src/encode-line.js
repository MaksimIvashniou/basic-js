const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  if (!str) return '';
  return str.match(/(.)\1*/g).reduce((result, group) => {
    const char = group[0];
    const count = group.length;
    return `${result}${count > 1 ? count : ''}${char}`;
  }, '');
}

module.exports = {
  encodeLine
};
