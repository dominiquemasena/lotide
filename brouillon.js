const eqObjects = function(object1, object2) {
  let entriesArray1 = Object.values(object1);
  let entriesArray2 = Object.values(object2);
  let result = true;
  for (let i = 0; i < entriesArray1.length; i++){
    for (let j = 0; j < entriesArray1[i].length; j++){
      if ((entriesArray1[0][0] || entriesArray1[0][1]) === (entriesArray2[0][0] || entriesArray2[0][1])) {
        return ;

      }
    }
  }
}
// return true;
// a = [0][0];
// b = [1][0];

// for (let i = 0; i < entriesArray1.length; i++){
//   for (let j = 0; j < entriesArray1[i].length; j++){

//   }
// }

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
(eqObjects(ab, ba), true);

// const abc = { a: "1", b: "2", c: "3" };
// assertEqual(eqObjects(ab, abc), false);

// const cd = { c: "1", d: ["2", 3] };
// const dc = { d: ["2", 3], c: "1" };
// assertEqual(eqObjects(cd, dc), true);

// const cd2 = { c: "1", d: ["2", 3, 4] };
// assertEqual(eqObjects(cd, cd2), false);