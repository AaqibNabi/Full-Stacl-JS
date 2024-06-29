// Object literal enhancement is used to group variables from the global scope and form them into javascript objects. It is the process of restructuring or putting back together.
// EXAMPLE 1
// variable declaration
var name = "Duke";
var color = "Brown";
var age = 5;

// Using Object Literal Enhancement
// Combines all variables into a dog object
var dog = { name, color, age };
console.log(dog);

// EXAMPLE 2
// variable declaration
var name = "Tike";
var color = "Black";
var age = 7;

// function declaration
var bark = () => {
  console.log("Woof Woof!!");
};

// Using Object Literal Enhancement
// combines all variables into an anotherDog object
var anotherDog = { name, color, age, bark };
anotherDog.bark();

// EXERCISE 1
var a = 1;
var b = 2;
var c = 3;
const obj = { a, b, c };
console.log(obj);

// EXERCISE 2

const lib = {
  sum: (a, b) => a + b,
  mult: (a, b) => a * b,
};

console.log(lib.sum(2, 5));
console.log(lib.mult(2, 5));

// EXERCISE 3
function getPerson(name, age, height) {
  return {
    name,
    age,
    height,
    // intro(){
    //    We can write Fun syntax like this OR
    // },
    intro: () => {
      console.log(
        `Hello my name is ${name} and my age is ${age} and my height is ${height}`
      );
    },
  };
}
const person = getPerson("Aaqib", 24, "6ft");
console.log(person.intro());
