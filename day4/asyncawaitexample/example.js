/**
 * Async/Await functionality provides a better and cleaner way to deal with promises.
JavaScript is synchronous in nature and async/await helps us write promise-based functions in such a way as  of they were synchronous by stopping the execution of further code until the promise is resolved or rejected.
 */
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

/**
 * async makes a function return a Promise
   await makes a function wait for a Promise
 */