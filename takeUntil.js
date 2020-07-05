const assertArraysEqual = require('./assertArraysEqual');

const takeUntil = function(array, callback) {
  const results = [];
  
  for (let item of array) {
    if (!callback.includes(item)) {
      results.push(item);
    } else {
      return results;
    }
  }
};



assertArraysEqual(takeUntil([1, 2, 3, 1, 2, 3], [3]), [1, 2]);
assertArraysEqual(takeUntil([6, 7, 8, 9], [8]), [6, 7]);
assertArraysEqual(takeUntil(["1", "2", "3"], ["3"]), ["1", "2"]);
