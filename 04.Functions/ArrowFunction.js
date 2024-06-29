// const fun = () => {};

fun = (username) => {
  return `Hello ${username}`;
};
console.log(fun("Izam"));

// Another Way of Writing
const double = (num) => num * 2;
console.log(double(3));

// EXERCISE
setTimeout(() => {
  console.log("Hello");
  setTimeout(() => {
    console.log("Hey");
    setTimeout(() => {
      console.log("Salam");
      setTimeout(() => {
        console.log("Hi");
        setTimeout(() => {
          console.log("Bonjour");
        }, 2000);
      }, 2000);
    }, 2000);
  }, 2000);
}, 2000);
