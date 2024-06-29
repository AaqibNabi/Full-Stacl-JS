const person1 = {
  name: "Aaqib Nabi Reshie",
  age: 20,
  email: "reshieaaqib@gmail.com",
  iCode: true,
  hobbies: ["Reading", "Coding", "Cooking"],
  address: {
    city: "Anantnag",
    State: "j&k",
  },
};
console.log(person1);

// JSON.stringify()
const jsonString = JSON.stringify(person1);
console.log(jsonString);

// JSON.Parse
const jsonParse = JSON.parse(jsonString);
console.log(jsonParse);
