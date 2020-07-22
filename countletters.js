const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};



const countLetters = function (string) {
  let total = {};
  let counted = string.split(" ").join("");
  for (let letter of counted) {
    if (total[letter]) {
      total[letter] += 1;
    } else {
      total[letter] = 1;
    }
  }
    return total;

  }


console.log(countLetters("Dominique"));




 
 
 