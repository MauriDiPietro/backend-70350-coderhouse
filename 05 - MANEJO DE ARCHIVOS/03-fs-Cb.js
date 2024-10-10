const fs = require("node:fs");

const path = "./prueba.txt";

if (fs.existsSync(path)) {
  fs.readFile(path, "utf-8", (error, info) => {
    if (error) console.log(error);
    else {
      console.log(info);
      fs.appendFile(path, "segundo texto", (error, info) => {
        if (error) console.log(error);
        else {
          console.log("texto agregado");
          fs.readFile(path, "utf-8", (error, info) => {
            if (error) console.log(error);
            else console.log(info);
          });
        }
      });
    }
  });
} else {
  fs.writeFile(path, "hola", (error) => {
    if (error) console.log(error);
    else console.log("texto agregado con exito");
  });
}
