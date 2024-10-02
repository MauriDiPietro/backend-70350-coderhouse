/* --------------------------------- or -------------------------------- */
//0, null undefined, false, NaN, ''  ---> valores en falso (para || no existen)
let var1 = null
let var2 = 1
// if(var1) console.log('no es falsey');
// else console.log('es falsey');

let altura = 0;
// console.log(altura || 100);

// console.log(altura ?? 100);ç

console.log(null || 'falsey');
console.log(undefined || 'falsey');
console.log('' || 'falsey');
console.log(NaN || 'falsey');
console.log(false || 'falsey');

/* ------------------------------------ nullish ----------------------------------- */

// null y undefined ---> valores en falso (para ?? no existen)
console.log(null ?? 'falsey');
console.log(undefined ?? 'falsey');
console.log('' ?? 'falsey');
console.log(NaN ?? 'falsey');
console.log(false ?? 'falsey');

/* --------------------------- variables privadas --------------------------- */

class Person{
    #fullName;
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.#fullName = `${this.firstName} ${this.lastName}`;
    }

    getFullName() {
        return this.#fullName;
    }
}

// console.log(Person.#fullName);  //SyntaxError: Private field '#fullName' must be declared in an enclosing class
const instance = new Person('Juan', 'Perez')
// console.log(instance.#fullName);





