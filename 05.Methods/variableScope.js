let texMessage = "Hi this is Global Variable";//GLOBAL VARIABLE
console.log(texMessage);
function showMessage(){
    let textMessage = "Hi this is Local Variable"; //LOCAL VARIABLE
    console.log(textMessage);
};
showMessage();