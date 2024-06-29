// href
// value
// type
const a = document.querySelector("a");
const input = document.querySelector("input");

// GETTING Attributes
console.log(a);
console.log(a.href);
console.log(input.value);
console.log(input.type);
// Setting Attributes
a.href = "https://www.google.com";
console.log((input.value = "Hello"));
console.log((input.type = "password"));
console.log((input.placeholder = "Provide a strong password"));
// getAttribute(attrName)
console.log(input.getAttribute("type"));
console.log(input.getAttribute("placeholder"));
// setAttribute(attrName Value)
console.log(input.setAttribute("placeholder", "Email"));
console.log(input.setAttribute("type", "password"));
