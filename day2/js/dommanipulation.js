function domManipluationFunction(){
    let element = document.querySelector('p');
    element.style.color="blue";
    element.style.backgroundColor="green";
    element.setAttribute("title","My Title");
    element.innerHTML="Changed paragraph value";
}