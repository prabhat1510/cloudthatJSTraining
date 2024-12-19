const data = require("./users.json");
console.log(data);
console.log("****************************************");
const fs = require("fs");
//Read json file using fs module readFile method
fs.readFile("users.json",function(err,data){
    if(err){
        throw err;
    }
    //Getting json data in JS
    console.log("*********************data *******************");
    console.log(data);
    console.log("*******************data after parsing*********************");
    const userData=JSON.parse(data);//Converting the data into JSON format
    console.log(userData);
});