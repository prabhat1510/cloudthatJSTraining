//Single line comment
//Calculator example
//Take the user input 
/**console.log("For Addition enter 1 \n");
console.log("For Subtraction enter 2 \n");
//In NodeJS prompt is not accessible directly
const operations=prompt("Enter the operation you want to perform");
console.log("User has entered "+operations);*/
//Defining the function
function addition(num1,num2){
    let result = num1+num2;
    return result;
}
//Defining the function
function subtraction(num1,num2){
    let subResult = num1-num2;
    return subResult;
}
//Defining the arrow function
const multiply = (num1,num2)=>num1*num2;//arrow function
let addResult = addition(10,15);
console.log(addResult);
let subResult = subtraction(10,15);
console.log(subResult);
let mulRes = multiply(10,15);
console.log(mulRes);