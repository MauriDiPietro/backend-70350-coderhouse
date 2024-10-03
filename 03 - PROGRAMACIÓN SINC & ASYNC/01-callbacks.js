const suma = (a, b) => a+b;
const resta = (a, b) => a-b;
const multiplicacion = (a,b) => a*b;
const division = (a,b) => a/b;

const operaciones=(a, b, funcionCallback)=>{
    console.log(funcionCallback(a, b));
}

// operaciones(1, 2, (a, b) => a+b)
operaciones(1, 2, suma)

/* ------------------------------------ - ----------------------------------- */

setTimeout(()=>{
    // console.log('este mensaje se muestra despues de 3 segundos');
    console.log(multiplicacion(5,5))
}, 3000)

const saludo = (name) => `Hola ${name}`

const fnTest = (cb, name) => cb(name)

console.log(fnTest(saludo, 'Pedro'));

