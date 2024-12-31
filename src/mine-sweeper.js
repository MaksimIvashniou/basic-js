const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  const sliceArea = (index) => [index - 1 < 0 ? 0 : index - 1, index + 2];

  return matrix.map((row, rowIndex) =>
    row.map((cell, cellIndex) => {
      const area = matrix
        .slice(...sliceArea(rowIndex))
        .map((row) => row.slice(...sliceArea(cellIndex)));

      return area.flat().filter(Boolean).length - (cell ? 1 : 0);
    })
  );
}

module.exports = {
  minesweeper
};
