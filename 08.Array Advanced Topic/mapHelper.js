//  The map() method creates a new array populated with the results of calling a provided function on every element in the calling array

let numbers = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(numbers.map((num) => num * 2));
// OR
let double = numbers.map((num) => {
  return num * 2;
});
console.log(double);

// The map() method can also be used to extract attributes from an array of objects and store it in another array.

const objects = [
  { a: 1, b: 2 },
  { a: 3, b: 4 },
  { a: 5, b: 6 },
];
let newObjects = objects.map((object) => {
  return [object.a, object.b];
});
console.log(newObjects);

const arrObj = [
  { name: "izam", age: 24, gender: "female" },
  { name: "Aaqib", age: 24, gender: "male" },
  { name: "Munhad", age: 16, gender: "male" },
];

const objArray = arrObj.map((objs) => {
  return [objs.name, objs.age, objs.gender];
});
console.log(objArray);

// EXERCISE
let random = [10, 12, 45, 1, 34, 52];
let tenTimes = random.map((num2) => {
  return num2 * 10;
});
console.log(tenTimes);

// Another Way of Writing
timesTen = (num3) => {
  return num3 * 10;
};
let times10 = random.map(timesTen);
console.log(times10);
