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
  if (arr1.length === arr2.length && arr1.every((value, index) => value === array2[index])) {
    console.log(`✅✅✅ Assertion Passed: :white_check_mark: ${arr1} === ${arr2}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: :octagonal_sign: ${arr1} !== ${arr2}`);
  }
}
assertArraysEqual([1, 2, 3], [1, 2, 3]);
assertArraysEqual([1, 2, 3], [3, 2, 1]);
assertArraysEqual(["1", "2", "3"], ["1", "2", "3"]);