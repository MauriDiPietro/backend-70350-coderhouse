const expMath = Math.pow(2, 3)  //2*2*2
const expES7 = 2 ** 3

// console.log(expMath);
// console.log(expES7);

/* ------------------------------------ - ----------------------------------- */

const array = [1,2,3,4,5,6]
// console.log(array.includes(5));
// console.log(array.includes(15));


const personas = [
    { nombre: 'Juan', edad: 25 },
    { nombre: 'Pedro', edad: 35 },
    { nombre: 'Carlos', edad: 40 }
];

// const exists = personas.some((p)=>{
//     return p.edad === 40
// })

const exists = personas.find((p)=>{
    return p.edad === 40
})

console.log(exists);
