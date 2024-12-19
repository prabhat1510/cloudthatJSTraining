//Better than XMLHttpRequest
//Fetch API allows JS to make HTTP request to the server
function getJSONData(){
    //fetch().then().catch()
    fetch("https://dummyjson.com/recipes")
        .then(response =>{ 
            console.log(response);
            if(!response.ok){
                throw new Error('We didn\'t get proper response');
            }
            return response.json()//to get json data from response object
        })
        .then(data=>{console.log(data);})
        .catch(error=>{console.log(error);});
}

getJSONData()