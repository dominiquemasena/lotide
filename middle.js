const assertEqual = require('./assertEqual');

const middle = function(arr) { 
  if (arr.length >= 3) {
  return arr[Math.round((arr.length - 1) / 2)]}
  else {
    console.log([])}
};


assertEqual(middle([1, 2, 3]), 2);

module.exports = middle; 