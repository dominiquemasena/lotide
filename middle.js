function assertArraysEqual(actual, expected) {
  const arrayEqual = eqArrays(actual, expected);
   if (!arrayEqual) {
     console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
   } else {
     console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);;
 }
}

const eqArrays = function(array1, array2) {

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


const middle = function(array) { 
  let mid = [];
  if (array.length < 3){
    return [];
  } else if (array.length % 2 !== 0) {
    let myIndex = Math.round((array.length - 1) / 2);
    mid.push(array[myIndex])
} else {
  let myOtherIndexI = Math.floor((array.length - 1) / 2);
  let myOtherIndexII = Math.ceil((array.length - 1) / 2);
  mid.push(array[myOtherIndexI], array[myOtherIndexII]);
    }
    return mid;
  };


// 0, 1, 2, 3, 4, 5, 6, 7
assertArraysEqual(eqArrays(middle([11, 23, 36, 54, 45, 76, 97, 88]), [54, 45]), true);
console.log("middle([45, 24])", middle([45, 24])) // []
console.log("middle([1, 2, 3, 4, 5, 6, 7])", middle([1, 2, 3, 4, 5, 6, 7])); // [4]
console.log("middle([11, 23, 36, 54, 45, 76, 97, 88])", middle([11, 23, 36, 54, 45, 76, 97, 88])); // [54, 45]
































