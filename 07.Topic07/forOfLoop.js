// The "for...of" loop in javascript is a modern iteration statement introduced inECMAScript 6 (ES6) that provides a concise and easy way to loop over eleme ts in iterable objects like arrays,strings,maps,sets,and more.It allows you to iterate directly over the valuers of the elements,rather than dealing with their indices or keys,which makes the code more readable and less error-prone.

// for(variable of iterable){...}
// EXAMPLE 1
let colors = ["green", "orange", "red", "blue", "white"];
for (let x of colors) {
  console.log(x);
}
// EXAMPLE 2
let text = "Hey";
for (let letters of text) {
  console.log(letters);
}

// EXERCISE
const array1 = ["a", "b", "c"];
for (const items of array1) {
  console.log(items);
}
