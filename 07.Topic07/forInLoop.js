// The "for...in" loop in JavaScript is used to iterate over the enumerable properties of an object. It is a way to loop through the keys (property names) of an object.

// for(let key in object){...}

const person = {
  name: "Aaqib",
  age: 24,
  gender: "male",
};
for (let keys in person) {
  console.log(keys, person[keys]);
}

let list = ["one", "two", "three"];
for (let index in list) {
  console.log(`${index}: ${list[index]}`);
}

// EXERCISE
const object = { a: 1, b: 2, c: 3 };
for (const property in object) {
  console.log(`Property:${property} & Value:${object[property]}`);
}
