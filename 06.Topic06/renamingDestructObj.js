const coordinates = { x: 203, y: 122, z: 102 };
const { x: new1, y: new2, z } = coordinates; //Renamed x as new1 & y as new2
console.log(new1);
console.log(new2);
console.log(z);

// OBJECT DESTRUCTURING AND REST OPERATOR

const diet = {
  protien: "Chicken Breast",
  vitamins: "Fruits",
  carbs: "White Rice",
  fats: "Avocado",
};
const { protien: meal1, vitamins: meal2, ...meal3 } = diet;
console.log(meal1);
console.log(meal2);
console.log(meal3);

// EXERCISE
const person = {
  name: "John Doe",
  age: 30,
  gender: "Male",
  country: "USA",
};
const {
  name: personName,
  age: personAge,
  gender: personGender,
  country: personCountry,
} = person;
console.log(personName);
console.log(personAge);
console.log(personGender);
console.log(personCountry);
