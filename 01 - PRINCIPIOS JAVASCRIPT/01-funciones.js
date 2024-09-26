function saludar1(nombre) {
  return `Hola ${nombre}`;
}

const saludar2 = (nombre) => `Hola ${nombre}`;

console.log(saludar2("juan"));

/* ------------------------------------ - ----------------------------------- */

const array = [1, 2, 3, 4, 5];

const array2 = array.filter(x => x < 4);

console.log(array2);

/* ------------------------------------ - ----------------------------------- */
let num = 9
const fn1 = () => {
    // let num = 1
    console.log(num);
}

// console.log(fn1());
console.log(num);

/* ------------------------------------ - ----------------------------------- */

// let nombre1 = 'Juan'
// let edad1 = 45
// let msg = 'Mi nombre es ' + nombre1 + ' y tengo ' + edad1 + ' años'

// console.log(msg);

let nombre1 = 'Juan'
let edad1 = 45
let msg = `Mi nombre es ${nombre1} y tengo ${edad1} años`

console.log(msg);

const msgMultilinea = `
    este es un ejemplo
    de un mensaje
    multilinea
`
console.log(msgMultilinea);
