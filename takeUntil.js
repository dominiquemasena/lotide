const takeUntil = function(array, callback) {
  const results = [];
  for (let item of array) {
    if (callback(item) !== true) {
      results.push(item);
    } else {
      return results;
    }
  }
};


const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);


function assertArraysEqual(array, callback) {
  if (takeUntil((array, callback))) {
    console.log(`✅✅✅Assertion Passed: ${array} === ${callback}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${array} !== ${callback}`);
  }
};

function eqArrays(arr1, arr2) {
  if (arr1.length === arr2.length && arr1.every((value, index) => value === arr2[index])) {
    return true;
  } else {
  }
  return false;
}

// assertEqual((eqArrays([1, 2, 3], [1, 2, 3])), true);
// assertEqual((eqArrays([1, 2, 3], [3, 2, 1])), false);
// assertEqual((eqArrays(["1", "2", "3"], ["1", "2", "3"])), true);
// assertEqual((eqArrays(["1", "2", "3"], ["1", "2", 3])), false);

assertArraysEqual([1, 2, 3], [1, 2, 3]);
assertArraysEqual([1, 2, 3], [3, 2, 1]);
assertArraysEqual(["1", "2", "3"], ["1", "2", "3"]);
assertArraysEqual(["1", "2", "3"], ["1", "2", 3]);