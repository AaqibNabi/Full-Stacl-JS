let a = 11;
let b = 7;

if (a > b){
    console.log("a is greater than b");
} else if (a < b){
    console.log("a is less than b");
} else{
    console.log("a is equal to b");
}


// EXERCISE
let password = 19;

if (password === 8){
    console.log("Welcome");
} else if(password <= 7){
    console.log("Password is too short.");
} else if(password >= 8){
    console.log("Password is too long.");
    console.log("Password should be 8 characters.");
} else{
    console.log("Please provide a password");
}