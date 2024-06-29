// createElement()
// append()
// prepend()

/* insertAdjacentElement(
    'beforebegin'
    'afterend'
    'beforeend'
    'afterend',
    element
) */

// removeChild()
// remove()

// EXERCISE
const h1 = document.querySelector("h1");
const h2 = document.createElement("h2");
const ul = document.querySelector("ul");
const li = document.createElement("li");
const li2 = document.createElement("li");
const li3 = document.createElement("li");
const li4 = document.createElement("li");
const li5 = document.createElement("li");
const li6 = document.createElement("li");
li.classList.add("special");
li2.classList.add("special");
li3.classList.add("special");
li4.classList.add("special");
li5.classList.add("special");
li6.classList.add("special");

h2.innerText = "World";
h2.classList.add("special");
h1.appendChild(h2);

li.innerText = "appended li";
ul.append(li);

li2.innerText = "prepended li";
ul.prepend(li2);

li3.innerText = "Insert Adjacent Element Before Begin";
ul.insertAdjacentElement("beforebegin", li3);
li4.innerText = "Insert Adjacent Element After Begin";
ul.insertAdjacentElement("afterbegin", li4);
li5.innerText = "Insert Adjacent Element Before End";
ul.insertAdjacentElement("beforeend", li5);
li6.innerText = "Insert Adjacent Element After End";
ul.insertAdjacentElement("afterend", li6);

h1.removeChild(h2);
h1.remove();
