// In object destructuring order doesn't matter but name does
const profile = {
  name: "Aaqib",
  profession: "student",
  age: 24,
  address: "dialgam",
};
const { name, profession, ...c } = profile;
console.log(name);
console.log(profession);
console.log(c);

// EXERCISE
const person = {
  name1: "John Doe",
  age: 30,
  gender: "Male",
  country: "USA",
};
const { name1, age, gender, country } = person;
console.log(name1);
console.log(age);
console.log(gender);
console.log(country);
