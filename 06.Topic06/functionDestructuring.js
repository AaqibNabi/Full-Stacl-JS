const person = {
  name: "Izam",
  sem: 8,
  age: 24,
  country: "Kashmir",
};
fun = (person) => {
  // Without DESTRUCTURING
  console.log(`Name:${person.name}`);
  console.log(`Sem:${person.sem}`);
  console.log(`Age:${person.age}`);
  console.log(`Country:${person.country}`);
};
fun(person);

//  With DESTRUCTURING
fun1 = ({ name, sem, age, country }) => {
  console.log(`Name:${name}`);
  console.log(`Sem:${sem}`);
  console.log(`Age:${age}`);
  console.log(`Country:${country}`);
};
fun1(person);

//DESTRUCTURING With Renaming
fun2 = ({
  name: personName,
  sem: Semster,
  age: personAge,
  country: personCountry,
}) => {
  console.log(`Name:${personName}`);
  console.log(`Sem:${Semster}`);
  console.log(`Age:${personAge}`);
  console.log(`Country:${personCountry}`);
};
fun2(person);
