const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  let ar= domains;
  let dom={};
  for (let i=0; i<ar.length; i++){
    if (dom[`.${ar[i]}`]){dom[`.${ar[i]}`]+=1}
    else {dom[`.${ar[i]}`]=1}
    ar[i]=ar[i].split('.')/*.reverse()*/;
  }
  for (let i=0; i<ar.length; i++){
    if (dom[`.${ar[i][ar[i].length-1]}`]){dom[`.${ar[i][ar[i].length-1]}`]+=1}
    else {dom[`.${ar[i][ar[i].length-1]}`]=1}
   if (dom[`.${ar[i][ar[i].length-2]}.${ar[i][ar[i].length-1]}`]){dom[`.${ar[i][ar[i].length-2]}.${ar[i][ar[i].length-1]}`]+=1}
    else {dom[`.${ar[i][ar[i].length-2]}.${ar[i][ar[i].length-1]}`]=1}


  }
  console.log(dom);

//  let arr1=Object.keys(dom).sort((a,b)=>dom[b]-dom[a])
// console.log(arr1);// console.log(ar); 
 
 return dom

 // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
}
//getDNSStats(['code.yandex.ru', 'music.yandex.ru', 'yandex.ru'])

module.exports = {
  getDNSStats
};
