const assertEqual = function(actual, expected) {
  if (actual / expected === 1) {
    console.log(`🛑🛑🛑 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`✅✅✅ Assertion Failed: ${actual} !== ${expected}`);
  }
};
  
let arr = [];
const head = function(arr){
  return arr[0]
};

assertEqual(head([5,6,7]), 5);