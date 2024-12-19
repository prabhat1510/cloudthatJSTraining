let arr= [24,27,20,12,28];
console.log("Before reverse "+arr);
arr.reverse();
console.log("After reverse "+arr);
arr.sort();
console.log("After sorting "+arr);
arr.reverse();
console.log("After reverse "+arr);
let arrOfStr =["HTML","CSS","BootStrap","Java Script"];
arrOfStr.sort();
console.log(arrOfStr);
console.log(Math.max(10,5,16,20,2));
console.log("*******************************Pop Push Shift and Unshift*************");
//Push will add element in the end of the array
let person=["John","Doe",46];
person.push("Melbourne");
person.push("Australia");
console.log(person);
console.log(person.length);
console.log(person.pop());//it returns the Australia which is at the end of an array
console.log(person);
person[2]="Gold Coast";//It will replace the element at index position 2
console.log(person);
//[ 'John', 'Doe', 'Gold Coast', 'Melbourne' ]
console.log("*****shift & unshift****************")
person.unshift("Southern Cross");//add an element at the start of the array
console.log(person);
person.shift();//remove an element from the start of the array
console.log(person);


