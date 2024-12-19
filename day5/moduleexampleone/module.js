// Module.js file
function addTwoNumbers(a, b) {
    return a + b;
}
 
function multiplyTwoNumbers(a, b) {
    return a * b;
}
 
//const exportedObject = { addTwoNumbers, multiplyTwoNumbers };
const exportedObject = { addTwoNumbers};
 
// module.exports can be used to export
// single function but we are exporting
// object having two functions
module.exports = exportedObject;
//module.exports ={addTwoNumbers}