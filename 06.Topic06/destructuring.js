// Destructuring allowws us to "unpack" values from data-structures(Arrays,Objects) into separate distinct variables.

const arr = ["one", "two", "three"];

// Without DESTRUCTURING
const a = arr[0];
const b = arr[1];
const c = arr[2];
console.log(a);
console.log(b);
console.log(c);
// WITH DESTRUCTURING
const [x, y, z] = arr;
console.log(x);
console.log(y);
console.log(z);

//Providing default values while destructuring
let p, q, r;
[p = 2, q = 4, r = 6] = [10, "twenty"];
console.log(p);
console.log(q);
console.log(r);

// DESTRUCTURING DATA FROM RETURN FUNCTION
fun1 = () => {
  return [1, "apple"];
};
let l, m;
[l, m] = fun1();
console.log(l);
console.log(m);

// IGNORING SOME RETURN DATA FROM FUNCTION
fun2 = () => {
  return [1, "two", 3];
};
const [u, v, ,] = fun2(); //Ignoring 3
console.log(u);
console.log(v);

// Assigning rest of an array to a variable
const [g, h, ...i] = ["banana", "apple", "orange", "plum", "pear"]; //REST OPERATOR
console.log(g);
console.log(h);
console.log(i);

// EXERCISE
const colors = ["red", "green", "blue", "yellow", "orange"];
const [color1, color2, color3] = colors;
console.log(color1, color2, color3);
