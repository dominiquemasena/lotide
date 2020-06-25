const assertEqual = function(actual, expected) {
  if (actual / expected === 1) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

let arr1 = [];
let arr2 = [];
function eqArrays(arr1, arr2) {
  if (arr1.length === arr2.length && arr1.every((value, index) => value === arr2[index])) {
    return true;
  } else {
    return false;
  }
}
assertEqual((eqArrays([1, 2, 3], [1, 2, 3])), true);
assertEqual((eqArrays([1, 2, 3], [3, 2, 1])), false);
assertEqual((eqArrays(["1", "2", "3"], ["1", "2", "3"])), true);
assertEqual((eqArrays(["1", "2", "3"], ["1", "2", 3])), false);