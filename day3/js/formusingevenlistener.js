const inputs = document.querySelectorAll("input");

window.addEventListener("click", saveAll);

function saveAll() {
  let inputNames = [];
  inputs.forEach(function(input) {
    const inputName = {};
    inputName.key = input.name;
    inputName.value = input.value;
    inputNames.push(inputName);
  });
  return inputNames //return the array
}

console.log(saveAll()[0].key) //
console.log(saveAll()) //Array