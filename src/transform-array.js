const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform( arr ) {
  //throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here

    if(typeof arr !== "Array") { 
        console.log(`'${arr}' parameter must be an instance of the Array!`);
        return(`${arr} + parameter must be an instance of the Array!`) 
    }
    newarr=[];
    for (let i=0; i<arr.length; ){
        if (arr[i]=="--discard-next"){i=i+2}
        else if (arr[i]=="--discard-prev"){ newarr.pop(); i++}
        else if (arr[i]=="--double-next"){ newarr.push(arr[i+1]); i++}
        else if (arr[i]=="--double-prev"){ newarr.push(arr[i-1]); i++}
        else {newarr.push(arr[i]); i++}
    }
    //console.log(newarr);
    return newarr

}

module.exports = {
  transform
};
