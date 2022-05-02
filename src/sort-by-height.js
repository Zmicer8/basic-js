const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  for (let i=0; i<arr.length;){
    if (arr[i]==-1){ i++}
    for (let y=i+1; y<arr.length-1;y++){
        if (arr[i]>arr[y] & arr[y]!=-1 & arr[i]!=-1){[arr[i],arr[y]]= [arr[y],arr[i]]} 
    }i++;
  }
 console.log(arr);return arr

 // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
}
sortByHeight([-1,1,-1,-1,5,-1,1,-1,-4,4,-1,-33,-1,2,-1,-1])

module.exports = {
  sortByHeight
};
