const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
function countCats( matrix) {
  //throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  
    let countCat=0;
    const l=matrix.length;
    for (let i=0; i < l; i++) {
        for (let y=0; y < l; y++){ if ((matrix[i])[y]=='^^') {countCat=countCat+1}}
    }
    //console.log(countCat);
    return countCat;
    
    //countCats([ [0, 1, 5, '^^'], [0, '^^', 2, 7], ['^^', 1, '^^', 2],['^^', 1, 2, 0] ]);
}

module.exports = {
  countCats
};
