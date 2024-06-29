let one = document.querySelector(".onkeydown");
let two = document.querySelector(".onkeypress");
let three = document.querySelector(".onkeyup");
let paragraph = document.querySelector(".paragraph");
one.addEventListener("keydown", () => {
  one.classList.toggle("red");
  paragraph.innerHTML = "You pressed a key inside the input field";
});
two.addEventListener("keypress", () => {
  two.classList.toggle("blue");
  alert("You pressed a key inside the input field");
});
three.addEventListener("keyup", () => {
  three.classList.toggle("green");
  three.value = three.value.toUpperCase();
});
