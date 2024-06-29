const movies = [
  {
    name: "interstellar",
    director: "Christopher Nolan",
    duration: "2.30 hours",
  },
  { name: "Inception", director: "Christopher Nolan", duration: "2.40 hours" },
  {
    name: "Dunkirk",
    director: "Christopher Nolan",
    duration: "2.43 hours",
  },
];
const [
  { name: name1, director: D1, duration: dur },
  ,
  { duration: d, name: name3, director: D3 },
] = movies;
console.log(name1, D1, dur);
console.log(d, name3, D3);
