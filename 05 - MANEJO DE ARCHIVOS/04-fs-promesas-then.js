const fs = require("node:fs");

const path = "./prueba.txt";

// if (fs.existsSync(path)) {
//   fs.promises
//     .readFile(path, "utf-8")
//     .then((data) => {
//       console.log(data);
//       return fs.promises.appendFile(path, "segundo texto");
//     })
//     .catch((error) => console.log(error));
// } else {
//   fs.promises
//     .writeFile(path, "primer texto promesas")
//     .then(() => console.log("texto agregado"))
//     .catch((error) => console.log(error));
// }

/* ------------------------------------ - ----------------------------------- */

const products = [
  {
    name: "Iphone 5",
    price: 5000,
    stock: 25,
  },
  {
    name: "Iphone 6",
    price: 5000,
    stock: 25,
  },
];

const prod3 = {
  name: "Iphone 7",
  price: 5000,
  stock: 25,
};

// console.log(JSON.stringify(products));
//{"name":"Iphone 5","price":5000,"stock":25}

const path2 = "./prueba.json";
//guardar info JSON.stringify
fs.writeFileSync(path2, JSON.stringify(products));

const productsJson = fs.readFileSync(path2, "utf8");

//Manipular info JSON.parse
const prodsJS = JSON.parse(productsJson);
prodsJS.push(prod3);

//sobreescribir info JSON.stringify
fs.writeFileSync(path2, JSON.stringify(prodsJS));

//stringify para guardar ---> formato JSON
// parse para utilizar la info --> formato javascript
