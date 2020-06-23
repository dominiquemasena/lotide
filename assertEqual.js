const assertEqual = function(actual, expected) {
  if (actual / expected === 1) {
    console.log(`🛑🛑🛑 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`✅✅✅ Assertion Failed: ${actual} !== ${expected}`);
  }
};
assertEqual(1, 1);
  
