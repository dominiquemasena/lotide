const assertEqual = require('./assertEqual');


const tail = function(arr) {
  let arguments = [];
  arguments = arr.slice(1);
  return arguments;
};



module.exports = tail;