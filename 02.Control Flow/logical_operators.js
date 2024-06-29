const a = true;
const b = false;
const c = 10;

console.log(a && b);
console.log(c < 20 && c > 20);


console.log(a || b);
console.log(c < 30 || c > 30);


console.log(!a);
console.log(!b);


let password = "AaqibReshie";
if(password.length >= 8 && password.includes("esh")){
    console.log("Valid Password");
} else{
    console.log("Invalid Password");
}