// A Function Expression is when you define a function and assign it to a variable.
// Not hoisted like function declarations

// console.log(sum(10,20))

// const sum = function (a,b){
//     return a+b
// }

// console.log(sum(10,20))

// console.log(sum(10,20))

// function sum(a,b){
//     return a+b
// }



// const sum = (a,b) =>{
//     return a+b
// }

// console.log(sum(10,20))


// Hoisting behaviour with functions

// Function Declarations — Hoisted
greet(); 

function greet() {
  console.log("Hello from declaration!");
}

// Function Expressions — Not hoisted
sayHi(); // ReferenceError: Cannot access 'sayHi' before initialization

const sayHi = function () {
  console.log("Hi from expression!");
};

// Arrow Functions — Not hoisted
sayHello(); //  ReferenceError: Cannot access 'sayHello' before initialization

const sayHello = () => {
  console.log("Hello from arrow function!");
};


// If you're using var for function expressions or arrow functions (not recommended), the variable is hoisted and initialized to undefined:
say(); // ❌ TypeError: say is not a function

var say = () => console.log("Arrow with var");