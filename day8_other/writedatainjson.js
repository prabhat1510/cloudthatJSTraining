const users = require('./users.json');
const fs = require("fs");
console.log(users);
console.log("*************************************")
console.log(users.users);
console.log("*************************************")
//Data to be added or appended in an existing file
let user ={
    "user":"Sathish",
    "password":"sathish123",
    "role":"admin"
};
//Added the user object into users object
users.users.push(user);

//Wrtie users into the json file
fs.writeFile("users.json", JSON.stringify(users),err=>{
    if(err){
        throw err;
    }
    console.log("Data written successfully");
}

); 