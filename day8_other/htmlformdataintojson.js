
function convertToJson(){
    //const fs = require("fs");

    let form = document.getElementById("dataForm");
    console.log(form);
    let formData={};
    for(let i=0;i<form.elements.length;i++){
        let element = form.elements[i];
        if(element.type != "submit"){
            formData[element.name]=element.value;
        }
    }
    let jsonData=JSON.stringify(formData);
    console.log(jsonData);
    jsonOutput.innerHTML = "<pre>" + jsonData + "</pre>";
/**
    fs.writeFile("formData.json", jsonData,err=>{
        if(err){
            throw err;
        }
        console.log("Data written successfully");
    }
    
    ); */
}