const assert = require('chai').assert;
const middle = require('../middle');

describe("#middle", () => {
  it("returns [54, 45] for [11, 23, 36, 54, 45, 76, 97, 88]", () => {
    assert.deepEqual(middle([11, 23, 36, 54, 45, 76, 97, 88]), [54, 45]);
  });

  it("returns [] for []", () => {
    assert.deepEqual(middle([]), []);
  });

  // it("returns '5' for ['5']", () => {
  //   assert.strictEqual(head(['5']), '5'); 
  // });
});

// const assert = require('chai').assert;
// const middle   = require('../middle');

