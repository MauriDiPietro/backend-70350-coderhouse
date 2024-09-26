class Persona {
    constructor(nombre){
        this.nombre = nombre;
    }

    static variableEstatica = 'hola'

    getNombre(){
        return this.nombre;
    }
}

const instancia1 = new Persona('Juan')
console.log(instancia1.getNombre());

console.log(Persona.variableEstatica);

