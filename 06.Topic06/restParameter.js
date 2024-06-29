// The rest parameter is an improved way to handle function parameters, allowing us to more easily handle various inputs as parameters in a function. The rest parameter syntax allows us to represent an indefinite number of arguments as an array. With the help of a rest parameter, a function can be called with any number of arguments, no matter how it was defined. Rest parameter is added in ES2015 or ES6 which improved the ability to handle parameter.

// SYNTAX
display = (...userdata) => {
  console.log(userdata);
};
display("Aaqib", 24, "developer", "football", "chess", "coding");

// EXAMPLE 2
personalDetails = (name, age, ...hobbies) => {
  console.log(name);
  console.log(age);
  console.log(hobbies);
};
personalDetails("IZam", 24, "cooking", "talking", "travel");

// EXERCISE
fun = (...para) => {
  console.log(para);
};
fun("hey", "what", "are", "you", "doing");
