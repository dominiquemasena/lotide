const words = ["ground", "control", "to", "major", "tom"];
const map = function(array, callback) {
  let results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
  
}

let arr1 = [];
let arr2 = [];
function eqArrays(arr1, arr2) {
  if (arr1.length === arr2.length && arr1.every((value, index) => value === arr2[index])) {
    return true;
  } else {
  }
  return false;
}


const assertArraysEqual = function (arr1, arr2){
  
}
let arr1 = [];
let arr2 = [];
function assertArraysEqual(arr1, arr2) {
  if (arr1.length === arr2.length && arr1.every((value, index) => value === arr2[index])) {
    console.log(`✅✅✅ Assertion Passed: ${arr1} === ${arr2}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${arr1} !== ${arr2}`);
  }
}

const results1 = map(words, word => word[0]);
console.log(results1);