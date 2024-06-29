// When we call the foreach helper/method we pass in anonymous callback function,
// This function gets called one time for every element in the array
// Whatever is inside the function that logic happens

//  Example 1
const items = ["bat", "ball", "lamp", "toys", "jug"];
const colors = ["red", "green", "orange"];
// without foreach helper method
for (let i = 0; i < items.length; i++) {
  console.log(items[i]);
}
// with foreach helper method
items.forEach((thing) => console.log(thing));
colors.forEach((color) => {
  console.log(color);
});

// EXAMPLE 2
const words = ["hello", "hi", "hey buddy", "cool"];
words.forEach((word, index, arr) => {
  arr[index] = word[0].toUpperCase() + word.substring(1);
  console.log(word);
  console.log(index);
});
console.log(words);

// EXERCISE
let nums = [1, 2, 3, 4, 5];
let sum = 0;
adder = (num) => {
  sum += num;
};
nums.forEach(adder);
console.log(sum);

// PRACTICE
let mul = 1;
multiply = (num1) => {
  mul *= num1;
};
nums.forEach(multiply);
console.log(mul);
let div = 1000;
division = (num2) => {
  div /= num2;
};
nums.forEach(division);
console.log(div);
