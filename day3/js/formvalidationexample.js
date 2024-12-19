function getFormData(){
    let name= document.getElementById("ipName").value;
    let mNumber= document.getElementById("ipNumber").value;
    //Reading form data as individual items and then creating a js object named as userDetails
    let userDetails={
        uName:name,
        uNumber:mNumber
    }
    //userDetails.uName // aacessing the JS object properties
    validate(userDetails);
}
function  validate(userDetails) {
    let patternForName="^[A-Za-z]+$";
    let patternForNumber="^[6-9]{1}[0-9]{9}$";
    let {uName,uNumber}=userDetails;//Destructuring
    validateName(uName,patternForName);
    validateMobileNumber(uNumber,patternForNumber);
}
function validateName(uName,patternForName){
    if(uName.search(patternForName) != -1){
        //alert("Valid name");
    }else{
        //alert("Invalid name");
        document.getElementById("errMsg1").innerHTML="Invalid name";
    }
}
function validateMobileNumber(uNumber,patternForNumber){

    if(uNumber.search(patternForNumber) !=-1){
        //alert("Valid number");
    }else{
        //alert("Invalid number");
        document.getElementById("errMsg2").innerHTML="Invalid number";
    }




}