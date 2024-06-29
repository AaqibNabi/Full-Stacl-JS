function greet() {
    return `I am ${person.name} & I am ${person.age} years old.`
}

const person ={
    name : "Aaqib",
    age : 24,
    greet,
};

console.log(person.greet());

const profile = {
    name : "Izam",
    age  : 24,
    greeting : function (){
        return `I am ${profile.name} & I am ${profile.age} years old.`;
    },
};
console.log(profile.greeting());



