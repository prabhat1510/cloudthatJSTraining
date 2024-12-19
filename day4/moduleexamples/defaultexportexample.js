function abc(){
    console.log("Inside abc");
    def();
}
function def(){
    console.log("Inside def");
    lmn();
}

function lmn(){
    console.log("Inside lmn");
}
export {abc as default};