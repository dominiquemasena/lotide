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

assertEqual(array1, array1);
















