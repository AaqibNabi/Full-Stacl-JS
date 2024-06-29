// Map is a built-in data structure introduced in ES6 that allows you to store key-value pairs where both the keys and values can be of any data type.It is similar to an object,but with a few key differences:

// -> Keys can be of any data type : Unlike objects,where keys are limited to strings and symbols,Map allows you to use any data type as keys,including numbers,boolean,objects ,and even other Map instances.
// -> Maintains insertion order: Map preserves the order of key-value pairs as they were inserted, while objects keys may not be guaranteed to be in a specific order.

// ->Iteration : Map provides built-in methods for easy iteration over its elements.

// Example 1
let map1 = new Map([
  [1, 2],
  [2, 3],
  [4, 5],
]);

console.log("Map1");
console.log(map1);

let map2 = new Map([
  ["firstname", "sumit"],
  ["lastname", "ghosh"],
  ["website", "geeksforgeeks"],
]);

console.log("Map2");
console.log(map2);

// Example 2
const map = new Map();
const key1 = "Aaqib";
const key2 = {};
const key3 = function () {};

// Using map.set() method to store key&value pairs in map

map.set(key1, "Value of Key1");
map.set(key2, "Value of Key2");
map.set(key3, "Value of Key3");
console.log(map.keys());
console.log(map.values());
console.log(map.delete(key2));
console.log(map);
console.log(map.size);

// Extracting keys and values
for (let [key, value] of map) {
  console.log(`${key} : ${value}`);
}
for (let key of map.keys()) {
  console.log(key);
}
for (let value of map.values()) {
  console.log(value);
}

// Exercise
const map4 = new Map();
map4.set("a", 1);
map4.set("b", 2);
map4.set("c", 3);
console.log(map4);
console.log(map4.get("a"));
console.log(map4.size);
console.log(map4.delete("b"));
console.log(map4.size);
