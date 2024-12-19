function  validate() {

    let name= document.getElementById("ipName").value;
    let pattern="^[A-Za-z]+$";
    //search method or function returns number greater 
    //than or equal to zero if valid or else -1 
    if(name.search(pattern) != -1){
        alert("Valid name");
    }else{
        alert("Invalid name");
    }
    //call validate mobile number
    validateMobileNumber();
}

function validateMobileNumber(){
    let mNumber= document.getElementById("ipNumber").value;
    let pattern="^[6-9]{1}[0-9]{9}$";
    if(mNumber.search(pattern) !=-1){
        alert("Valid number");
    }else{
        alert("Invalid number");
    }
}