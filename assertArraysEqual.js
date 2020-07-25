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


function assertArraysEqual(actual, expected) {
  const arrayEqual = eqArrays(actual, expected);
   if (!arrayEqual) {
     console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
   } else {
     console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);;
 }
}

assertArraysEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
assertArraysEqual(eqArrays([1, 2, 3], [3, 2, 1]), false);
assertArraysEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true);



