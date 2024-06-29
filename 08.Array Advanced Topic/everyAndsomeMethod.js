// The Array.every() method in JavaScript is used to check whether all the elements of the array satisfy the given condition or not. The output will be false if even one value does not satisfy the element, else it will return true, and it opposes the some() function.
// The Array.some() method in JavaScript is used to check whether at least one of the elements of the array satisfies the given condition or not. and it accepts true/false boolean expressions, The only difference is that the some() method will return true if any predicate is true while every() method will return true if all predicates are true.

// EXAMPLE 1
const array = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(array.every((num) => num < 10));
console.log(array.every((num) => num > 2));
console.log(array.some((num) => num > 2));

// EXAMPLE 2
const objectArray = [
  { name: "Izam", age: 24 },
  { name: "Abc", age: 17 },
  { name: "Aaqib", age: 24 },
];
console.log(objectArray.every((user) => user.age > 20));
console.log(objectArray.every((user) => user.age > 10));
console.log(objectArray.some((user) => user.name.startsWith("I")));
console.log(objectArray.some((user) => user.name.startsWith("c")));

// EXERCISE
let products = [
  { name: "Checkers", category: "Toys" },
  { name: "Harry Potter", category: "Books" },
  { name: "iPhone", category: "Electronics" },
  { name: "Learn Php", category: "Books" },
];

let allProductsBooks = products.every((product) => product.category == "Books");
console.log(allProductsBooks);

let someProductsBooks = products.some((product) => product.category == "Books");
console.log(someProductsBooks);
