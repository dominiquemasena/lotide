const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  let objectsEqual = eqObjects(actual, expected);
  if (!objectsEqual) {
    console.log(`🛑🛑🛑 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  } else {
    console.log(`✅✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  }
};


// function assertArraysEqual(actual, expected) {
//   if (actual !== expected) {
//     console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
//   } else {
//     console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);;
// }
// }

// function assertArraysEqual(actual, expected) {
//   const arrayEqual = eqArrays(actual, expected);
//    if (!arrayEqual) {
//      console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
//    } else {
//      console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);;
//  }
// }



const eqObjects = function(object1, object2) {
  for (let key in object1) {
    if (Object.keys(object1).length !== Object.keys(object2).length) {
      return false;
    }

    if (typeof object1[key] !== typeof object2[key]) {
      return false;
    }

    if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
      return eqArrays(object1[key], object2[key]);
    }

    if ((typeof object1[key] === typeof object2[key]) && (object1[key] !== object2[key])) {
      return false;
    }
  }
  
  return true;
}


const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertObjectsEqual((ab, ba), true); 
