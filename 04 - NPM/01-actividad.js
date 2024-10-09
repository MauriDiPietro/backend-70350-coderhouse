/*
{
    5: 1,
    2: 455,
    ...
    20
}
*/

const obj = {};

for (let i = 0; i <= 10000; i++) {
  const numeroAleatorio = Math.floor(Math.random() * 20) + 1;
  if (!obj[numeroAleatorio]) {
    obj[numeroAleatorio] = 1; // { 5: 1 }
  } else obj[numeroAleatorio]++; // { 5: 2 }
}

console.log(obj);

// console.log(Math.floor(Math.random() * 20) + 1);     --> 5
