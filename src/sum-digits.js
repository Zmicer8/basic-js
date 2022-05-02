const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
function getSumOfDigits(n) {
 // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
 
    let sum=0;   
    let l=n+'';         
    for(let i=0; i<l.length;i++){
        sum=sum+l[i]*1
    } n=sum;
      if ((n+'').length==1) {/* console.log(n) */;return n}
      else {return(getSumOfDigits(n))} 
     /*console.log(n); return(n);*/
}


module.exports = {
  getSumOfDigits
};
