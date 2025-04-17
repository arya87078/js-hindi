// ➤ String
let name = "Amit";
let city = 'Lucknow';
let greeting = `Hello, ${name}!`; // template literal

console.log("String:", name, city, greeting);

// ➤ Number
let age = 25;
let price = 99.99;
let discount = -10;

console.log("Number:", age, price, discount);

// ➤ Boolean
let isOnline = true;
let isStudent = false;

console.log("Boolean:", isOnline, isStudent);

// ➤ Undefined
let phone;
console.log("Undefined:", phone); // undefined

// ➤ Null
let middleName = null;
console.log("Null:", middleName); // null

// ➤ Array
let fruits = ["apple", "banana", "mango"];
let scores = [10, 20, 30];
console.log("Array:", fruits, scores);

// ➤ Object
let user = {
  name: "Amit",
  age: 25,
  isMember: true
};
console.log("Object:", user);

// ➤ Function (also a type in JS)
function greetUser(userName) {
  return `Hello, ${userName}`;
}
console.log("Function:", greetUser("Amit"));

// ➤ Symbol
let sym1 = Symbol("id");
console.log("Symbol:", sym1);

// ➤ BigInt
let bigNumber = 1234567890123456789012345678901234567890n;
console.log("BigInt:", bigNumber);
