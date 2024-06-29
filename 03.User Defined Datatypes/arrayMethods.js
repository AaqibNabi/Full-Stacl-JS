const colors = ["violet","indigo","blue","green","yellow","orange","red"];
console.log(colors);
// PUSH && POP
colors.push("gold");
console.log(colors);
colors.pop()
console.log(colors);

// SHIFT AND UNSHIFT

colors.shift()
console.log(colors);
colors.unshift("Magenta");
console.log(colors);

// CONCAT
const moreColors = ["black","white","teal"];
const newColors = colors.concat(moreColors);
console.log(newColors);

// INCLUDES 
console.log(newColors.includes("teal"));

// JOIN 
console.log(colors.join(","));

// REVERSE
console.log(newColors.reverse());

// Slice
console.log(colors.slice(0,4));

// SPLICE
console.log(newColors.splice(4));

// SORT
const num = [1,4,99,3,90,54,67,78,83,2,5];
console.log(num);
console.log(num.sort()); 