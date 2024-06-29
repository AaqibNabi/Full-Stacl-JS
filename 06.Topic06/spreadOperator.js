// The Spread operator is a key feature in JavaScript that enables an iterable to expand wherever zero or more arguments are required. Its primary use case is with arrays, especially when expecting multiple values. This operator provides the convenience of easily extracting a list of parameters from an array, making our code more versatile and readable.

// EXAMPLE WITH FUNCTIONS
giveMe4 = (a, b = 0, c = 0, d = 0) => {
  console.log("a", a);
  console.log("b", b);
  console.log("c", c);
  console.log("d", d);
};
const colors = ["red", "blue", "green", "teal"];
giveMe4(...colors);

// Using with ARRAYS
const strngNums = ["one", "two", "three", "four"];
const moreStrNums = ["five", "six", "seven"];
const concat = [...strngNums, ...moreStrNums];
console.log(concat);

//Using with OBJECTS
const obj1 = { x: 1, y: 2 };
const obj2 = { z: 3 };
const allObjs = { ...obj1, ...obj2 }; //spread operator
const nestedObjs = { obj1, obj2 }; //Nested objects
console.log(allObjs);
console.log(nestedObjs);

// ANOTHER EXAMPLE IN OBJECTS
const details = {
  name: "Aaqib",
  age: 24,
  gender: "male",
};
const clone = {
  ...details,
  height: "6ft",
  address: "Dialgam",
};
console.log(clone.name);
console.log(clone.gender);
console.log(clone);

// EXERCISE
let arr = [1, 2, 3];
let arr1 = [4, 5, 6];
let cloneArr = [...arr, ...arr1];
console.log(cloneArr);

const user = {
  name: "Jen",
  age: 22,
};
const cloneUser = { ...user, gender: "female" };
console.log(cloneUser);
