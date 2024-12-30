const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  const length = matrix[0]?.length;
  return matrix
    .flat()
    .reduce((a, b, i, matrix) => a + (matrix[i - length] === 0 ? 0 : b), 0);
}

module.exports = {
  getMatrixElementsSum
};
