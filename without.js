const assertEqual = function(actual, expected) {
  if (actual / expected === 1) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

let arr1 = [];
let arr2 = [];
function assertArraysEqual(arr1, arr2) {
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


//write a function "without" 
//which will an array and return unwanted element.
// unwanted elements are elements that are the same in (arr1, arr2)

const without = function (arr1, arr2){
  let filteredNums =[];
for (let i = 0; i < arr1.length; i++) {
  if (!arr2.includes(arr1[i])){
    filteredNums.push(arr1[i])
  }

}
return filteredNums;
}
console.log(without([1, 2, 3], [1])) 