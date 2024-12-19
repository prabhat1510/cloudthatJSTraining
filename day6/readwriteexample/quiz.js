//Object serialization
o = {x:1, y:{z:[false,null,""]}}; 

console.log(typeof o);
console.log(o);
s = JSON.stringify(o); //Convert JS Object to string
console.log(typeof o);
console.log(s);
p = JSON.parse(s); //JSON Data to JS Object
console.log(typeof p);
console.log(p);
