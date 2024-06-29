let one = document.querySelector(".onclick");
let two = document.querySelector(".oncontextmenu");
let three = document.querySelector(".ondblclick");
let four = document.querySelector(".onmousedown");
let five = document.querySelector(".onmouseenter");
let six = document.querySelector(".onmouseleave");
let seven = document.querySelector(".onmousemove");
let eight = document.querySelector(".onmouseout");
let nine = document.querySelector(".onmouseover");
let ten = document.querySelector(".onmouseup");

one.addEventListener("click", () => {
  one.classList.toggle("red");
});
two.addEventListener("contextmenu", () => {
  two.classList.toggle("voilet");
});
three.addEventListener("dblclick", () => {
  three.classList.toggle("indigo");
});
four.addEventListener("mousedown", () => {
  four.classList.toggle("blue");
});
five.addEventListener("mouseenter", () => {
  five.classList.toggle("green");
});
six.addEventListener("mouseleave", () => {
  six.classList.toggle("yellow");
});
seven.addEventListener("mousemove", () => {
  seven.classList.toggle("orange");
});
eight.addEventListener("mouseout", () => {
  eight.classList.toggle("teal");
});
nine.addEventListener("mouseover", () => {
  nine.classList.toggle("aqua");
});
ten.addEventListener("mouseup", () => {
  ten.classList.toggle("gold");
});
