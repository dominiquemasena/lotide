const middle = function(arr) { 
  if (arr.length >= 3) {
  return arr[Math.round((arr.length - 1) / 2)]}
  else {
    console.log([])}
};


const assertEqual = function(actual, expected) {
  if (actual / expected === 1) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};


function assertArraysEqual(arr1, arr2) {
  let arr1 = [];
  let arr2 = [];
  if (arr1.length === arr2.length && arr1.every((value, index) => value === arr2[index])) {
    console.log(`✅✅✅ Assertion Passed: ${arr1} === ${arr2}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${arr1} !== ${arr2}`);
  }
}

function eqArrays(arr1, arr2) {
  if (arr1.length === arr2.length && arr1.every((value, index) => value === arr2[index])) {
    return true;
  } else {
    return false;
  }
}




module.exports = middle;