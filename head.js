const assertEqual = function(actual, expected) {
  if (actual / expected === 1) {
    console.log(`🛑🛑🛑 Assertion Passed:  + ${actual} +  ===  + ${expected}`);
  } else {
    console.log(`✅✅✅ Assertion Failed: + ${actual} + !== + ${expected}`);
  }
};
  
function head(){
  let headArray = 0;
  return assertEqual.head([0]);
}

assertEqual(head([5,6,7]), 5);