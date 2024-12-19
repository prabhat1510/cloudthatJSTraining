// app.js file
const obj = require("./module");

// Getting object exported from module.js
console.log(obj);

// Printing object exported from
// module.js that contains 
// references of two functions
const add = obj.addTwoNumbers;

// Reference to addTwoNumbers() function
console.log(add(3, 4));
//const multiply = obj.multiplyTwoNumbers;

// Reference to multiplyTwoNumbers() function
//console.log(multiply(3, 4));
