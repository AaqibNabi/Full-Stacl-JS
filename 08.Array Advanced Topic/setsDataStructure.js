//Sets in JavaScript are collections of unique values, meaning no duplicates are allowed. They provide efficient ways to store and manage distinct elements. Sets support operations like adding, deleting, and checking the presence of items, enhancing performance for tasks requiring uniqueness.

// Set objects are useful when you need to store a list of unique elements and quickly check for the existence of a specific value

const arr = [1, 2, 3, 4, 5, 6, 7, 6, 6, 5, 4, 5, 6];
console.log(arr);
const mySet = new Set(arr); //One way of adding
console.log(mySet);
// Another way of adding elements in Set()
mySet.add({ name: "izam", age: 24 });
mySet.add({ name: "izam", age: 24 });
mySet.add({ name: "aaqib", age: 24 });
mySet.add("apple");
mySet.add("grapes");
mySet.add("orange");
mySet.add("apple");
console.log(mySet.has("grapes"));
// Using foreach() helper
mySet.forEach((item) => console.log(item));
console.log(mySet);
mySet.delete("grapes");
// mySet.clear();
// console.log(mySet);

// Using for..of loop
for (let items of mySet) {
  console.log(items);
}

// Exercise
const letters = new Set();
letters.add("a");
letters.add("b");
letters.add("c");
console.log(letters);
for (let letter of letters) {
  console.log(letter);
}
