//Defining addition function which takes two arguments
function addition(num1,num2){
    let sum = num1+num2;//logical operation inside body of the function
    console.log("Sum of two numbers is "+sum);
    return sum;//function is returning the result using variable sum
}

function multiply(x,y){
    let multi = x*y;
    console.log("Multiplication of two numbers is ---"+multi);
    let addRes = addition(x,y);//Calling another function
    return addRes;
}

let result = multiply(2,4);//calling the function
console.log("Result is of addition ---"+result);



console.log("***************************************************");
//Call Back to display the result in  console
function displayResult(r){
    console.log("Result of division is ---"+ r);
}

//Actual function which accepts callback function as an argument
function division(a,b,myCallBack){
    let divRes=a/b;
    console.log("Inside division function");
    myCallBack(divRes);//call to call back function
}

division(4,2,displayResult); //calling the function 

division(10,2,(m)=>{console.log("Division of 10 and 2 is ---"+m)});//Arrow function will used only once
const mCallBack = (m)=>{console.log("Division of 12 and 4 is ---"+m)};//Arrow function is defined so can be reused
division(12,4,mCallBack);

const add =(x,y)=>x+y;
console.log(add(10,5));

const display=()=>{
    console.log("Inside display method");
    console.log("5"+"10");
}
display();//calling the function

