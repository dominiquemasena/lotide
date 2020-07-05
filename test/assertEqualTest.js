const assertEqual = require('../assertEqual');


console.log("these should be green!")
assertEqual(1, 1);
assertEqual("bootcamp", "bootcamp");

console.log("these should be red!")
assertEqual(1, 0);
assertEqual("LHL", "bootcamp");
assertEqual("bOoTcAmP", "bootcamp");
assertEqual("Lighthouse Labs", "Bootcamp");

assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);
