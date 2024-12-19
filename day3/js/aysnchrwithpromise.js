const myPromise = new Promise(
    //Arrow function
    (resolve,reject)=>{
        setTimeout(() => {
            //console.log("Looking like a WOW!!!!"); 
            resolve("Resolved successfully ");
            reject("Oops its an error");
         },2000);
         console.log("Hello ")
    }
);
console.log("Outside promise definition");
//myPromise.then().catch()
myPromise.then(
    (msg)=>{console.log(msg);}
).catch(
    (err)=>{console.log(err);}
);