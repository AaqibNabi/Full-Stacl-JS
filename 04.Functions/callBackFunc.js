// CALL BACK FUNCTION ----> when a function is passed as an argument in another function

// EXAMPLE 1
function showCallFunc(fn) {
    const value =10 ;
    fn(value);
};
showCallFunc(function (value){
  console.log(value);
});
// EXAMPLE 2
function grts(name,cb){
    console.log(`Hello ${name}`);
    cb();
};
function cb(){
    console.log(`I am callback function`);
};
grts("Izam",cb);
// EXERCISE
