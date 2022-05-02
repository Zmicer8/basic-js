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
function getMatrixElementsSum(matrix ) {
 // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  let sum = 0;
  l=matrix[0].length;
  l1=matrix.length;
  //console.log(l); console.log(l1);
  for(let i=0; i<l;i++){
      for(let y=0; y<l1;y++){ 
          if (matrix[y][i] !== 0) {sum = sum + matrix[y][i]}
          else break; 
      }
    }
   // console.log(sum);
   return sum
}

module.exports = {
  getMatrixElementsSum
};
