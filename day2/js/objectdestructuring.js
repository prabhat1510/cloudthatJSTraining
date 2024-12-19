let employee={
    firstName:"Madhuri",
    lastName:"Nene",
    dateofbirth:"1974"
}

console.log(typeof employee);
console.log(employee.firstName);
let {firstName,lastName,dateofbirth}=employee;
console.log(firstName);
console.log(lastName);
console.log(dateofbirth);

/**
 * Destructuring is a JS expression that allows us to 
 * extract data from arrays,objects and maps and set them into new distinct variables.
 * It allows us to extract multiple properties, or items from an array at a time.
 * 
 * let {var1,var2}={var1:value1,var2:value2}
 * 
 * The right side of the statement contains the JS object that we want to split into variables;
 * the left side contains a pattern for the corresponding properties of the object.
 * The "pattern" is usually a list of variable names
 */
let usercredentials={
    username:"rahul",
    password:"pass1234"
}
let {username,password}=usercredentials;
console.log(username);
console.log("*************************************")
var myArray ={msg:"Hello ",fname:"Aman", lname:" Aman"};
let {msg,fname,lname}=myArray;
console.log(msg);
console.log(fname);
console.log(lname);
console.log("*************************************")
var myArr = ["Hello ","Linson"," A"];
let[msg1,fname1,lname1] =myArr;
console.log(msg1);
console.log(fname1);
console.log(lname1);