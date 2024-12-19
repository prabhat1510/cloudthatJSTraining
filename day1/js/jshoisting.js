/**
 * Javascript Hoisting:-
 * Hositing is JS's default behaviour of moving declaration to the top
 * 
 * In JS a variable can be declared after it has been used
 * 
*/ 
z=10;//Initailzed the varibale z or use it
console.log(z);//used
var z;//declare it 
console.log(z);
m=5;
//let doesn't allow hoisting
console.log(m);
//let m;//Error
let pi=3.14;
console.log(pi);
const pii=15;
console.log(pii);

