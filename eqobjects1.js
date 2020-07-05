const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};


/* Pseudocode: compare two objects? How can I compare both arrays? by their length,
by their letters. 
Should I make the objects into an array?
Sort them and compare the values and or the keys... 

I would first see if there are two objects.
How? Can I measure objects? number of keys? length of object?

Turn object keys into arrays and compare keys if arr1[i] === arr2[j] (checkmark)
if possible access key values and if  

ultimately if the keys and values in both objects and equal. and both objects in array form are equal.
if (object.keys(ab) ) */

const eqObjects = function(object1, object2) {
  let keyA = Object.keys(object1);
  let keyB = Object.keys(object2);
  let valueA = Object.values(object1);
  let valueB = Object.values(object2);

  console.log(keyA);
  console.log(keyB);
  console.log(valueA);
  console.log(valueB);

  

  if ((typeof(object1) || typeof(object2)) === undefined) {
    return false;
  }
  for (let i = 0; i < keyA.length; i++) {
    for (let j = 0; j < keyB.length; j++) {
      if (keyA[i] === keyB[j]) {

  console.log(object1[i]);
  console.log(object2[i]);



      }

    }
  }
  for (let i = 0; i < valueA.length; i++) {
    for (let j = 0; j < valueB.length; j++) {
      if (valueA[i] === valueB[j]) {

      }

    }
  }
};

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertEqual(eqObjects(ab, ba)); 

const abc = { a: "1", b: "2", c: "3" };
assertEqual(eqObjects(ab, abc)); 