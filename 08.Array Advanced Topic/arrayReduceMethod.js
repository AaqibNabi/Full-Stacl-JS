// The reduce() method applies the reducer function to each element of an array accumulating the result into a single value.It is often used to perform calculations or aggregations on array elements and simplify the array into a single value.

var array = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let sum = array.reduce((num1, num2) => {
  console.log(`Previous:${num1}`);
  console.log(`Current:${num2}`);
  return num1 + num2;
});
console.log(sum);

let multi = array.reduce((prev, curr) => {
  console.log(`Previous:${prev}`);
  console.log(`Current:${curr}`);
  return prev * curr;
}, 1);
console.log(multi);

// EXAMPLE 2
const arrObj = [
  { name: "izam", age: 24 },
  { name: "a", age: 21 },
  { name: "b", age: 17 },
  { name: "c", age: 19 },
  { name: "d", age: 37 },
];
const oldAge = arrObj.reduce((p, c) => {
  let x = c.age > p ? c.age : p;
  return x;
}, 0);
console.log(oldAge);

// Example 3
const words = ["apple", "car", "dog", "bat", "orange"];
const wordFrequency = words.reduce((frequencyMap, word) => {
  frequencyMap[word] = frequencyMap[word] || 0 + 1;
  return frequencyMap;
}, {});
console.log(wordFrequency);

// EXERCISE
const numbers = [10, 20, 30, 40];
calculateProduct = (arr) => {
  return arr.reduce((prev, cur) => cur * prev);
};
const product = calculateProduct(numbers);
console.log(product);
