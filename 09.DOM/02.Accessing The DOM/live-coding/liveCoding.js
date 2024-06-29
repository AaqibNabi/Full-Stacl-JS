// ************ DOM SELECTORS ************
// 1. getElementsByTagName
console.log(document.getElementsByTagName("h1"));
console.log(document.getElementsByTagName("h1").length);
// 2. getElementById
console.log(document.getElementById("main"));
console.log(document.getElementById("id-1"));
// 3. getElementsByClassName
console.log(document.getElementsByClassName("cls"));
console.log(document.getElementsByClassName("cls-1"));
// 4. querySelector
console.log(document.querySelector("h1"));
console.log(document.querySelector(".cls"));
console.log(document.querySelector("#id-1"));
// 5. querySelectorAll
console.log(document.querySelectorAll(".cls"));
console.log(document.querySelectorAll("li"));
console.log(document.querySelectorAll("li").length);
// ---------------------------------------
// Storing data in variables
const h1 = document.querySelector("h1");
console.log(h1);
const h2 = document.querySelector("#main");
console.log(h2);
const h3 = document.querySelector(".cls");
console.log(h3);
const li = document.querySelectorAll("li");
console.log(li);
