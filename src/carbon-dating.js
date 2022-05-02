const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(sampleActivity) {
  //throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  let tt=sampleActivity*1;
      if (tt+''=='NaN' || tt>15 || tt<=0||tt==''){console.log(false);return false}
      let t=(Math.log(MODERN_ACTIVITY/sampleActivity))*5730/(0.693)
     console.log(Math.ceil(t)); return(Math.ceil(t))
}
module.exports = {
  dateSample
};
//dateSample('')