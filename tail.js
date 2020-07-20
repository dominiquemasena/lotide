const assertEqual = function(actual, expected) {
  if (isArrayEqual(actual, expected)) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const isArrayEqual = function(array1, array2) {

  if (array1.length !== array2.length) {
    return false;
  }
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  }
  return true; 
}

const tail = function(array) {
  ending = array.slice(1)
  return ending;
 }

const array1 = [5,6,7]; 
const array2 = tail(array1); 
// console.log(array1);
// console.log(array2);

// console.log(isArrayEqual(array1, array2));
assertEqual(array1, array1);
//  assertEqual(tail([5,6,7]), [6,7]);


// const assertEqual = require('./assertEqual');


// const tail = function(arr) {
//   let arguments = [];
//   arguments = arr.slice(1);
//   return arguments;
// };



// module.exports = tail;















