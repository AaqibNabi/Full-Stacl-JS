// In JavaScript, the Symbol is a primitive data type introduced in ES6.A symbol is often used as an identifier for object properties to avoid potential naming conflicts.

// Unlike strings or numbers,symbols are guaranteed to be unique.When you create a symbol,it is unique and cannot be recreated or changed.This uniqueness ensures that symbols will not collide with other property names,even if they have the same string representation.

// Comparing Symbol
const mySymbol1 = Symbol("name");
const mySymbol2 = Symbol("name");
console.log(mySymbol1 === mySymbol2);

// Providing symbol as property in objects
const obj = {};
obj[mySymbol1] = "Aaqib";
obj[mySymbol2] = "Izam";
console.log(obj);

// Example 2
const name1 = Symbol(name);
const name2 = Symbol(name);
const person = {};
person.age = 24;
person.gender = "female";
person.gender = "male";
person[name1] = "aaqib";
person[name2] = "izam";
console.log(person);

// Exercise
const newSymbol = Symbol();
console.log(typeof newSymbol);
const object1 = {};
object1[Symbol("foo")] = "foo value";
console.log(object1);
