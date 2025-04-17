// sync

console.log("Task 1"); //ye teeno line by line statment print honge
console.log("Task 2");
console.log("Task 3");

//async

console.log("Start");

setTimeout(() => {
  console.log("Inside setTimeout"); //2 sec bad print hoga ye statement
}, 2000);

console.log("End");


//output

// Task 1
// Task 2
// Task 3
// Start
// End
// Inside setTimeout