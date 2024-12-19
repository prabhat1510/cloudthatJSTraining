let person=["John","Doe",46];
for(let i=0;i<person.length;i++){
    console.log(person[i]);
}
let numbers = [1,2,3,4,5,6,7,8,9,10,11,12];
//Find out the even numbers from array numbers
//Approach 1
for(let i=0;i<numbers.length;i++){
    //Modulus division - remainder is zero
    if((numbers[i])%2 == 0){
        console.log("Even number is --- "+numbers[i]);
    }
}
console.log("**********************Approach 2*******************************")
//Approach 2
function checkOddorEven(number){
    if(number%2 == 0){
        console.log("Even number is --- "+number);
    }
}

numbers.forEach(checkOddorEven);

console.log("**********************Approach 3*******************************")
const isEven = (n)=>{if(n%2 == 0){
    console.log("Even number is ---"+n);
}
};
numbers.forEach(isEven);
console.log("**********************Approach 4**filter()*****************************")
const isEvenOrOdd =(n)=>{
    if(n%2 == 0){
    console.log("Number "+n+" is even");
    }else{
        console.log("Number "+n+" is odd");
    }
};
numbers.filter(isEvenOrOdd);

console.log("********************filter()*****************")
let arr =["HTML","CSS","BootStrap","Java Script"];
function checkTechStack(tech){
    return tech != "BootStrap";
}
console.log(arr.filter(checkTechStack));

console.log("********************find()*****************")
function searchTechStack(tech){
    return tech == "BootStrap";
}
console.log(arr.find(searchTechStack));

console.log("********************map()*****************")
console.log(arr);
const changeToUpperCase = (str)=>{return str.toUpperCase()};
console.log(arr.map(changeToUpperCase));
console.log(arr);
