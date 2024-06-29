// 1. Select the anchor tag
// 2. Use getAttribute(attrName) to check the attribute.
// 3. Select a-two & set "href" attribute
// setAttribute(attrName, value)

const a = document.querySelector("a");
console.log(a);
console.log(a.getAttribute("href"));

const a2 = document.querySelector(".a-two");
console.log(a2);
a2.setAttribute("href", "https://www.udemy.com/user/huxn-webdev");
console.log(a2.getAttribute("href"));
