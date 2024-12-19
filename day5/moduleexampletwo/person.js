let something

export function eat() {
  console.log("Inside eat");
  something = true
}
export function drink() {
  if (something) {
    console.log("Inside drink if condition");
  } else {
    console.log("Inside drink else condition");
  }
}