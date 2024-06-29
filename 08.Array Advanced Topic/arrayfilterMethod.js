// The Array filter() is an inbuilt method, this method creates a new array with elements that follow or pass the given criteria and condition.It provides a clean and concise way to filter out elements from an array based on a specified criteria.

// EXAMPLE 1

var words = [
  "hi",
  "hello",
  "hey",
  "apple",
  "watermelon",
  "lemon",
  "javascript",
];
var result = words.filter((word) => word.length > 5);
console.log(result);

// EXAMPLE 2

const arrObjects = [
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

var result = arrObjects.filter((user) => user.id > 0);
console.log(result);
console.log(arrObjects.filter((user) => user.name.startsWith("j")));

// EXERCISE 1
const ages = [32, 33, 16, 40, 54, 47];
console.log(ages.filter((age) => age > 30));

// EXERCISE 2
const wrds = ["spray", "limit", "elite", "exuberant", "destruction", "present"];
console.log(wrds.filter((wrd) => wrd.length > 6));
