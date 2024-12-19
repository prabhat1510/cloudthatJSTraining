function addNode(){
    let element = document.querySelector('p');
    let para = document.createElement('p');
    para.textContent="We hope you enjoyed learning";
    element.appendChild(para);

}

function deleteNode(){
    let element = document.querySelector('p');
    let para = document.querySelector('p p');
    element.removeChild(para);
}