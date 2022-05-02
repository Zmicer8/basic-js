const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
function getEmailDomain(email) {
  //throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
 
    let i= email.indexOf('@');
    let str= email.substr(i+1);
    console.log(str); return str

}
//getEmailDomain('prettyandsimple@example.com')
module.exports = {
  getEmailDomain
};
