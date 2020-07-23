const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};


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


const letterPositions = function(sentence) {
  const results = {};
  for (let letter in sentence) {
  if (sentence[letter] !== " ") {
    if (results[sentence[letter]]) {
       results[sentence[letter]].push(Number(letter));
     } else {
       results[sentence[letter]] = [Number(letter)];
     }
   }
 }
 return results;
};


console.log(letterPositions("lighthouse in the house"));
// assertArraysEqual(letterPositions("hello"), [1]);

//create test