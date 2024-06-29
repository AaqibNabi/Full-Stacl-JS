// The find() method is anothr built-in array helper in JavaScript that returns the first element that satisfies a provided test function. It iterates through each array element, ignoring empty slots, and returns undefined if no match is found. The original array remains unchanged.

// Example 1
const arrayObject = [
  {
    id: 1,
    name: "joe",
  },
  {
    id: -19,
    name: "john",
  },
  {
    id: 20,
    name: "james",
  },
  {
    id: 25,
    name: "jack",
  },
  {
    id: -10,
    name: "joseph",
  },
  {
    id: "not a number",
    name: "jimmy",
  },
  {
    id: null,
    name: "jeff",
  },
];
console.log(arrayObject.find((user) => user.id > 10));

// Example 2
const array = [
  "one",
  "two",
  "three",
  "four",
  "five",
  "six",
  "seven",
  "eight",
  "nine",
  "ten",
];
console.log(array.find((word) => word.endsWith("x")));

// Exercise
let products = [
  { name: "Checkers", category: "Toys" },
  { name: "Harry Potter", category: "Books" },
  { name: "iPhone", category: "Electronics" },
  { name: "Learn Php", category: "Books" },
];
console.log(products.find((product) => product.category == "Books"));
