const users = [
  {
    name: "Raúl",
    age: 35,
    series: ["Breaking Bad"],
  },
  {
    name: "Andres",
    age: 30,
    series: ["Game of Thrones"],
  },
];

// users.forEach((user) => {
//   user.age++, user.series.push("Sorjonen");
// });

for (const user of users) {
    user.age++, user.series.push("Sorjonen");    
}

console.log(users);

