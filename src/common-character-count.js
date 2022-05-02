const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount( s1, s2 ) {
let arr1=s1.split('');
let arr2=s2.split('');

let arr3 = arr1.filter(function(c) { return arr2.indexOf(c) >= 0; });
console.log(arr3);
for(let i=0;i<arr3.length-1;i++){
  for(let y=i+1; y<arr3.length; y++){
    if (arr3[i]==arr3[y]){arr3.splice(y,1)}
}
  //throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
}console.log(arr3.length)
}
//getCommonCharacterCount( 'aabccefd', 'adcaaef')

module.exports = {
  getCommonCharacterCount
};
