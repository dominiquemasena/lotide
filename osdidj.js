const string = "lighthouse in the house";
const indexPosition = function(str){
 for (let i in str){
if (str[i] !== "") {
  result[str[i]].push(Number(i));
} else {
  result[str[i]] = [Number(i)];
}
 } return result
}

console.log()
//result = {}
//result.color = "red";
//let key = "make";
//result[key] = "Toyota"

const groceryList = {
  one: "Milk",
  2: "Cookies",
  2.43: "Steak",
  "item number three": "Herbs"
}
const printGroceryList = function (object) {
  let i = 1;
  for (let item in object) {
  console.log(i + ") " + object[item]);
  i++;
}
// method #2
let values = Object.values(object);
console.log(values);
}