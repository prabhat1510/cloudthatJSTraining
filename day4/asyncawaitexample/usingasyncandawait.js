async function myFunction (){
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
    console.log("Before innerhtml value is set");
    document.getElementById("demo").innerHTML=await myPromise;
    console.log("Afters innerhtml value is set");
}
myFunction();


