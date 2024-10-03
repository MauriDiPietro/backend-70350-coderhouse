const divisionPromesa = (a, b) => {
  return new Promise((resolve, reject) => {
    if (b === 0) reject("No se puede dividir por 0");
    else resolve(a / b);
  });
};

// console.log(divisionPromesa(1,2));

divisionPromesa(1, 0)
  .then((resultado) => {
    console.log(resultado);
  })
  .catch((e) => {
    console.log(e);
  });

fetch("https://jsonplaceholder.typicode.com/todos")
  .then((response) => response.json())
  .then((response) => console.log(response))
  .catch((err) => console.log(err))
