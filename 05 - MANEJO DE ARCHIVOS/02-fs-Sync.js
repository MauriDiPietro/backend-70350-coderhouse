const fs = require("node:fs");

if (fs.existsSync("./prueba.txt")) {
  fs.appendFileSync("./prueba.txt", "chau mundo");
} else fs.writeFileSync("./prueba.txt", "hola ");

console.log(fs.readFileSync('./prueba.txt', 'utf-8'))
