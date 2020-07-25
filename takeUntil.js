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

const takeUntil = function(array, callback) {
  let untilarr = [];
  for (let item of array) {
    if (callback(item) !== true) {
      untilarr.push(item);

    } else {
      return untilarr;
    }
  }
}


const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);



assertArraysEqual(takeUntil([1, 2, 3, 1, 2, 3], x => x > 2),[1, 2]);
