// SET INTERVAL
setInterval(() => {
  console.log("This will run after every 2 seconds.");
}, 2000);
// SET TIMEOUT
setTimeout(() => {
  console.log("This ran after 4 seconds.");
}, 4000);

// INTERVAL
const intervalID = setInterval(() => {
  console.log("This function is being executed at the interval.");
}, 500);
// STOPPING THE INTERVAL AFTER 10 SECONDS
setTimeout(() => {
  clearInterval(intervalID); //Stops interval
  console.log("Interval stopped");
}, 10000);
