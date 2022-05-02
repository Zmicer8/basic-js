const { NotImplementedError } = require('../extensions/index.js');

/**
 * Calculate turns number and time (in seconds) required
 * to solve puzzle
 * 
 * @param {Number} disks number of disks
 * @param {Number} turnsSpeed speed (in turns/hour)
 * @return {Object} object with props turns (number of turns)
 * and seconds (time in seconds)
 *
 * @example
 * 
 * calculateHanoi(9, 4308) => { turns: 511, seconds: 427 }
 *
 */
function calculateHanoi(disksNumber, turnsSpeed) {
  //throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  let turns=0;
  let n=disksNumber;
  let turnss=calc(n);
  
 function calc(n){
    
       if (n==1) { return turns=1 }
     else { return (turns=1+2*calc(n-1)) }
  }
 

let seconds = Math.floor(3600*turns/turnsSpeed);
//console.log(turns);console.log(seconds);
 return{turns,seconds} 
}
//calculateHanoi(3, 4308)

module.exports = {
  calculateHanoi
};
