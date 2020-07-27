const assertArraysEqual = require('../assertArraysEqual');
// const eqArrays = require('../eqArrays');
const middle = require('../middle');


// console.log("calling middle");
const m = middle([11, 23, 36, 54, 45, 76, 97, 88]);
// console.log("m =", m);
assertArraysEqual(m, [54, 45]);

