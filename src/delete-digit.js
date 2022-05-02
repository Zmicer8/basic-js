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
function deleteDigit(n ) {
 // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  let a = ''+ n;
  let result = '';
    for (let i=0; i<a.length-1; i++){
      if(a[i]<=a[i+1]){result = result + a.slice(i+1);break}
      else result=result+a[i] }
          

//console.log(result*1);
return(result*1)
  
}

module.exports = {
  deleteDigit
};
