const profile = {
    username : "Aaqib",
    email : "reshieaaqib@gmail.com",
    password : "Tac5mp1111",
    age :24,
    location : ["Dialgam","Anantnag","j&k"],
    isStudent :false,
    10 : "ten"
};

console.log(profile);

// ACCESSING ITEMS FROM OUR OBJECT
console.log(profile.username);
console.log(profile["username"]);
console.log(profile.age);
console.log(profile["age"]);
console.log(profile.email);
console.log(profile["email"]);
console.log(profile.password);
console.log(profile["password"]);
console.log(profile.location);
console.log(profile["location"]);
console.log(profile.isStudent);
console.log(profile["isStudent"]);
console.log(profile["10"]);   
// console.log(profile.10); ------> IS WRONG


// CHANGE PROPERTY VALUE
profile.age = 25;
console.log(profile.age);



// EXERCISE
const car = {
    type : "Land Rover" ,
    model : 400,
    color: "mettalic black"
};
console.log(typeof car);
console.log(car);
car.type = "toyota";
console.log(car);
car.wheels = "Spoke";
console.log(car.wheels);
console.log(car);


