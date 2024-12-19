//Define the promise
//Axios
let myPromise = new Promise(function(myResolve, myReject) {
    let x = 0;
  
  // some code (try to change x to 5)
    if (x == 0) {
      myResolve("OK");
    } else {
      myReject("Error");
    }
  });
//Handling the Promise data
  myPromise.then(
    function(value) {
        myDisplayer(value);
    },
    function(error) {
        myDisplayer(error);
    }
  );
  
  function myDisplayer(some) {
    if(document.getElementById("demo").innerHTML !=null){
        document.getElementById("demo").innerHTML= some;
    } 
  }