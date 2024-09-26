class Contador {
  constructor(nombre) {
    this.nombre = nombre;
    this.contador = 0;
  }

  static contadorGlobal = 0;

  getResponsable() {
    return this.nombre;
  }

  getCuentaGlobal() {
    return Contador.contadorGlobal;
  }

  getCuentaIndividual() {
    return this.contador;
  }

  contar() {
    Contador.contadorGlobal++;
    this.contador++;
  }
}

const contRaul = new Contador("Raul");
const contJose = new Contador("Jose");

// console.log(contRaul.getResponsable());
// console.log(contJose.getResponsable());
// console.log('****sumo 1 a Raul');
// contRaul.contar();
// console.log(`Contador de Raul= ${contRaul.getCuentaIndividual()}`);
// console.log(`Contador Global= ${Contador.contadorGlobal}`);
// console.log('****sumo 1 a Raul');
// contRaul.contar();
// console.log(`Contador de Raul= ${contRaul.getCuentaIndividual()}`);
// console.log(`Contador Global= ${Contador.contadorGlobal}`);
// console.log('****sumo 1 a Jose');
// contJose.contar();
// console.log(`Contador de Jose= ${contJose.getCuentaIndividual()}`);
// console.log(`Contador Global= ${Contador.contadorGlobal}`);
// console.log(`Contador de Raul= ${contRaul.getCuentaIndividual()}`);




class Productos {
    constructor(){
        this.products = []
    }

    getAll(){
        return this.products
    }

    create(prod){
        return this.products.push(prod);
    }

    getById(id){
        return this.products.find(prod => prod.id === id);
    }
}

const prodManager = new Productos();

prodManager.create({
    id: 1,
    name: 'prod1'
})
// console.log(prodManager.getAll());
console.log(prodManager.getById(1));

/* ------------------------------------ - ----------------------------------- */

class ProdManager extends Productos{
    constructor(){
        super();
    }

    createTicket(obj){
        return obj;
    }
}

const instProdManager = new ProdManager();

console.log(instProdManager.getAll())

console.log(instProdManager.createTicket({ticketNro: 5465456}))

