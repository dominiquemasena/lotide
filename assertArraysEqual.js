const eqArrays = require('./eqArrays');


function assertArraysEqual(actual, expected) {
  const arrayEqual = eqArrays(actual, expected);
   if (!arrayEqual) {
     console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
   } else {
     console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);;
 }
}






module.exports = eqArrays;
module.exports = assertArraysEqual;