const assertEqual = function(actual, expected) {
 if (actual / expected === 1) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};


const countLetters = function (string){
  let output = {};
  let newString = string.split(" ").join("");

for (let i of newString) {
  if (output[i]){
    output[i] += 1;
  } else {
    output[i] = 1;
  }
}
return output;
}
console.log(countLetters("Dominique"));