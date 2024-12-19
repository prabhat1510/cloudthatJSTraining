var a ="Karthik";
function greet(){
    console.log("****Line number 3 **** "+a)
    var a = "hello";//local scope
    console.log("-------------"+a+"-----------------");
}
console.log(a);//Karthik
var a= 'S'; //redeclared the variable a
greet();//Hello
console.log(a)
console.log("******************************")
/**
 * let is block-scoped
 * The variable declared with let can only be accessed inside a block of code
 * 
 * let doesn't allow to redeclare variables
*/ 
console.log("*************Let Example********************")
let msg="Hey Bob";
function greetings(){
    let msg="hello";//local scope
    console.log(msg)
    //let msg="How are you ?";//error 
    //console.log(msg)
}
greetings();
//console.log(msg)//Trying to access the msg variable outside the function or scope
console.log(msg)

console.log("**********************************Const Example*******************");
const pi=3.14;
//const pi=2.14;//redeclaration is not allowed
//pi=3.141111;//Assignment to constant variable is not allowed
console.log(pi);
const display=(msg)=>{console.log(msg)};
display("Hi");
