// FUNCTION DECLARATION
function greet(){
console.log("Hello I am a function ");
};
greet();


// FUNCTION WITH PARAMETERS
function sayHello(name) {
    // console.log(`Hello ${name}`);
    console.log("Hello"+" "+name);
};
// let myName = "Aaqib";
// sayHello(myName);
sayHello("Aaqib")


//2 PARAMETERS AND RETURN FUNCTION && EXERCISE
function calc(x,y){
    // let z = (x*y);
    // return z;
    return x*y;
};
let num1 = prompt("Please Enter First Number");
let num2 = prompt("Please Enter Second Number");
// let num3 = calc(num1,num2);
// console.log(num3);
console.log(calc(num1,num2));

// FUNCTION EXPRESSION
const greetings = function (user){
    console.log(`Hello ${user}`);
};
greetings ("JHON");



