// const name = 'Carlos'
// name = 'Manuel'

// console.log(name)

const variable1 = 'Hola'
const variable2 = 10
const variable3 = true
const variable4 = null
const variable5 = undefined

// console.log(typeof variable2);

// console.log(new Date().toLocaleDateString());

// console.log('Atención'.normalize("NFD").replace(/[\u0300-\u036f]/g, ""));

// throw new Error('error creado por mi')

function Hola(name){
    console.log(`Hola ${name}`);
}
Hola('Raul')

const hola2 = name => console.log(`Hola ${name}`);

hola2('Juan')

class ClaseEjemplo{
    constructor(){}
    saludar(name){
        console.log(`Hola ${name}`);
    }
}

const instanciaClase = new ClaseEjemplo();
instanciaClase.saludar('Pedro')


const array = ['Hola', 1, true, null]
console.log(array);

const arrayObj = [
    {
        name: 'Carlos'
    }, 
    {
        name: 'Roman'
    }
]

console.log(arrayObj[0].name);


console.log(process.cwd());
