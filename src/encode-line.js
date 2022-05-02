/*const { NotImplementedError } = require('../extensions/index.js');

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
 
  let newstr=[];
for (let i=0; i<str.length-1; ){
  let a=1;
  for (let y=i+1; y<str.length; ){
    if (str[i]==str[y]){a++;y++}   
     

    if ((str[i]!==str[y]) && (a!=1)) {
      newstr.push(`${a}` + `${str[i]}`);i=i+a; break}

      else if ((str[i]!==str[y]) && (a==1)){
        newstr.push(`${str[i]}`);i=i+a; break}
          
    } 
      
}
      if (str[str.length-1]!==str[str.length-2])  {
         newstr.push(`${str[str.length-1]}`)}

 //console.log(newstr.join(''));
 return (newstr.join(''))
  //throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
}
//encodeLine('aaabbcddefe')
module.exports = {
  encodeLine
};
