const assertEqual = require('./assertEqual');

function eqArrays(arr1, arr2) {
  if (arr1.length === arr2.length && arr1.every((value, index) => value === arr2[index])) {
    return true;
  } else {
  }
  return false;

}



module.exports = eqArrays;