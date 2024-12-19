//              0   1     2            3            
/**let cars = ["Audi","BMW","Honda","Suzuki"];//Array of strings
//             01234----9
let numbers = [1,2,3,4,5,6,7,8,9,10];//Array of numbers
console.log(cars[2]);
console.log(cars.length);
console.log(numbers.length);
console.log("*********************Accessing the arrays data using for loop**********")
//Accessing the arrays elements or data using for loop
for(number in numbers){
    console.log(number);
}
console.log("*********************Accessing the arrays data using for loop using index**********")
//let cars = ["Audi","BMW","Honda","Suzuki"];
for(let index=0;index<cars.length;index++){
    console.log(cars[index]);
}*/
let cars = ["Audi","BMW","Honda","Suzuki"];
console.log("******************Append year of manufacturing***********");
for(let c in cars){
    console.log(c);
    console.log(cars[c]+" 2024");
}
console.log("************Carss***************");
cars.forEach((x)=>console.log(x));