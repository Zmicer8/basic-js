const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason( date ) {
  //throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
     if (!date) {//console.log('ne')
      return 'Unable to determine the time of year!';
    }
  
    if (!(date instanceof Date) || date.hasOwnProperty("toString")) {//console.log('grи')
      return 'Invalid date!';
    }
  
    let season;
  
    if (date.getMonth() <= 1 || date.getMonth() == 11) {
      ;return season='winter';
    } 
    if (date.getMonth() <= 4 && date.getMonth() >=2) {
      ;return season='spring';
    } 
     if (date.getMonth() <= 7 && date.getMonth() >=5) {
      ;return season='summer';
    } 
     if (date.getMonth() <= 10 && date.getMonth() >=8) {
    ; return season='fall';
        }
  }


  //getSeason(new Date(2020, 03, 28))
module.exports = {
  getSeason
};
