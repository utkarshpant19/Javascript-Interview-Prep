
// Primitives: 

const a = 10.3;
const isLoggedIn = false;
const temperature = null;
let firstName;

// Symbol: is used to make data unique
let id = Symbol('123');
let id2 = Symbol('123');

console.log(id == id2); // false

let bigNum = 12345365474574747n; // BigInt

// Non Primitives

let arr = [1,2,3,4];
let obj = {a:1, b:2};

const fun = ()=>{
    console.log('Hello World');
}

console.log(typeof arr); // Object
console.log(typeof obj); // Object
console.log(typeof fun); // Function