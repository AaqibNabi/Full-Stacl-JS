// Introduced in ECMAScript 6(ES6),allows you to assign default values to function parameters.When a function is called, and an argument is not provided for a parameter, the default value will be used instead. This feature makes it easier to handle cases where arguments might be missing or undefined.

// EXAMPLE
// (rate = 3) is default value
ratings = (rate = 3) => {
  if (rate === 5) {
    console.log(`I am Happy,you gave me ${rate} stars :)`);
  } else if (rate < 3) {
    console.log(`I am Sad, you gave me ${rate} stars :(`);
  } else {
    console.log(`Thank you for ${rate} stars. `);
  }
};
ratings();

// EXERCISE
multiply = (a, b = 1) => {
  return a * b;
};
console.log(multiply(4, 4));
