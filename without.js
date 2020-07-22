function assertArraysEqual(array1, array2) {

  if (array1.length === array2.length && array1.every((value, index) => value === array2[index])) {
    console.log(`✅✅✅ Assertion Passed: ${array1} === ${array2}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${array1} !== ${array2}`);
  }
}

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



const without = function (array1, array2){
  let withoutNums =[];
for (let i = 0; i < array1.length; i++) {
  if (!array2.includes(array1[i])){
    withoutNums.push(array1[i])
  }

}
return withoutNums;
}
console.log(without([1, 2, 3], [1])) 