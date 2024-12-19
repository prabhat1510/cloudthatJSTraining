/**
 * JS spread operator (...) allows us to quickly copy all or part of an existing 
 * array or object into another array or object
 * 
 */

const numbers1=[5,6,7];
const numbers2=[8,9,10];
const combinedNumebrs=[...numbers1,...numbers2];
console.log(combinedNumebrs);

/**
 * The spread operator is often used in combination with destructuring
 */
const numbers =[10,11,12,13,14,15];
const [ten,eleven, ...rest]=numbers;//destructuring of numbers array
console.log(ten);
console.log(eleven);
console.log(rest);
const userCredentials={
    username:"unclebob",
    password:"pass123"
}

const userDetails={
    username:"unclebob",
    name:"Robert C Martin",
    age: 70
}
const updateUserDetails={...userCredentials,...userDetails};
console.log(updateUserDetails);

