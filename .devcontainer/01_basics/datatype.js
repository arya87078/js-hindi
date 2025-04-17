// ➤ String
let name = "Amit";
let city = 'Lucknow';
let greeting = `Hello, ${name}!`; // template literal

console.log("String:", name, city, greeting);

// ➤ Number
let age = 25;
let price1 = 99.99;
let discount = -10;

console.log("Number:", age, price1, discount);

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


//1. String
let username = "Amit";
let email = "amit@example.com";

console.log(`Welcome, ${username}`);

//2. Number
let price = 499;
let quantity = 2;
let total = price * quantity;
console.log("Total Price:", total);

//3. Boolean
let isLoggedIn = true;

if (isLoggedIn) {
  console.log("Show dashboard");
} else {
  console.log("Show login");
}

//4. Array
let todos = ["Buy milk", "Learn React", "Sleep"];
console.log("Today's task:", todos[0]); // Buy milk

//5. Object
let user1 = {
    name: "Amit",
    email: "amit@example.com",
    age: 25
  };
  
  console.log(`User ${user1.name} is ${user1.age} years old`);

//6. Null
let selectedProduct = null;

if (selectedProduct === null) {
  console.log("No product selected");
}

//7. Undefined
let phone1;
console.log(phone1); // undefined

//8. Function
function greet(name) {
    return `Hello, ${name}`;
  }
  
  console.log(greet("Amit"));

//9. Symbol (Advanced)
const id1 = Symbol("user");
const id2 = Symbol("user");

console.log(id1 === id2); // false

//10. BigInt
let big = 123456789012345678901234567890123n;
console.log(big + 10n);

//typeof – basic types check
console.log(typeof "hello");       // string
console.log(typeof 123);           // number
console.log(typeof true);          // boolean
console.log(typeof {});            // object
console.log(typeof []);            // object (array is object)
console.log(typeof function (){}); // function

//Array.isArray() – for checking array
let fruits1 = ["apple", "banana"];
console.log(Array.isArray(fruits1)); // true

//instanceof – for custom objects / class instances
class User {}
let u = new User();

console.log(u instanceof User); // true
console.log([] instanceof Array); // true

//Bonus: Type Check Function
function checkType(value) {
    if (Array.isArray(value)) return "Array";
    if (value === null) return "Null";
    return typeof value;
  }
  
  console.log(checkType([]));         // Array
  console.log(checkType(null));       // Null
  console.log(checkType(42));         // number
  console.log(checkType("hello"));    // string
  
  

  