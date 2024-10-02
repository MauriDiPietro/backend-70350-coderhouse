/* --------------------------------- spread --------------------------------- */
const array = [1, 5, 6, 8, 15];
// console.log(...array);
console.log(Math.min(...array));

const array2 = [...array, 10, 2, 55]

console.log(array2);

const obj1 = {
    a: 1,
    b: 2,
    c: 3
}

const obj2 = {
    ...obj1,
    d: 4
}

console.log(obj2);

/* ------------------------------------ -rest ----------------------------------- */

const functionTest = (a, b, ...otrosParams) => {
    console.log(a);
    console.log(b);
    console.log(otrosParams);
}

functionTest(1, 2, 333, 'sdasda', true, 890)




