const assert = require('chai').assert;
const tail = require('../tail');

describe("#tail", () => {
  it("returns [Lighthouse, Labs] for [Hello, Lighthouse, Labs]", () => {
    assert.deepEqual(tail(["Hello", "Lighthouse", "Labs"]), ["Lighthouse", "Labs"]);
  });

  it("returns [] for []", () => {
    assert.deepEqual(tail([]), []);
  });

  it("returns [2, 3] for [1, 2, 3]", () => {
    assert.deepEqual(tail([1, 2, 3]), [2, 3]);
  });

  // it("returns '5' for ['5']", () => {
  //   assert.strictEqual(head(['5']), '5'); 
  // });
});
// const assertArraysEqual = require('../assertArraysEqual');
// const tail   = require('../tail');



// const array1 = [5,6,7]; 
// const array2 = tail(array1); 

// // assertEqual(array1, array1);

// assertArraysEqual(tail([5,6,7]), [6,7]);
// // assertEqual(tail(["Hello", "Lighthouse", "Labs"]), ["Lighthouse", "Labs"]);

// // describe("#tail", () => {

// // });