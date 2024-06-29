// TERNARY OPERATOR ; The ternary operator is concise way of writing conditional expressions.It is the only JavaScript operator that takes three operands:a condition followed by a question mark(?), an expression to execute if the condition is true, followed by a colon(:), and an expressiom if condition is false.

// condition ? exrIfTrue : exprIfFalse;

const ifOn = true;
ifOn == true ? console.log("ON") : console.log("OFF");

// EXAMPLE 2
//Without using TERNARY OPERATOR
const pswrd = 8;
pswrdChecker = (password) => {
  if (password >= 8) {
    return `Strong Password`;
  } else {
    return `Weak Password,Password should be 8 characters`;
  }
};
console.log(pswrdChecker(pswrd));

//  Using TERNARY OPERATOR
const passcode = 7;
passcode >= 8
  ? console.log("Strong Passcode")
  : console.log("Weak Passcode,Passcode should be 8 characters");

// EXERCISE
const personHasMoney = false;
personHasMoney == true
  ? console.log(`Person can Buy Products`)
  : console.log(`Person should bring money`);
