const date = new Date();

const year = date.getFullYear();
const month = date.getMonth();
const day = date.getDay();
const hour = date.getHours();
const minutes = date.getMinutes();
const seconds = date.getSeconds();

console.log(`Year: ${year}`);
console.log(`Month: ${month}`);
console.log(`Day: ${day}`);
console.log(`Hours: ${hour}`);
console.log(`Minutes: ${minutes}`);
console.log(`Seconds: ${seconds}`);

console.log(date.toString());
console.log(date.toISOString());
console.log(date.toLocaleDateString());

// MANUIPULATE DATE
date.setDate(date.getDate() + 1);
console.log(date);
date.setDate(date.getDate() - 2);
console.log(date);
