const mostrarLista = (array) => {
    if(Array.isArray(array)){
        if(array.length === 0) return 'Lista vacia'
        /* ------------------------------------ - ----------------------------------- */
        // for (const item of array) {
        //     return item
        //}
        /* ---------------------------------- // - --------------------------------- */
        // switch (array.length) {
        //     case 0:
        //         return 'Lista vacia'
        //         break;
        //     default:
        //         return array.map((item) => item)
        //         break;
        // }
        /* ------------------------------------ - ----------------------------------- */
        console.log(`La longitud de este array es: ${array.length}`);
        return array.map((item) => item)
        /* ------------------------------------ - ----------------------------------- */
        // return array.length === 0 ? 'Lista vacia' : array.map((item) => item)
        /* ------------------------------------ - ----------------------------------- */
    } return 'No es un array'
}

const arrayNros = [1,2,3,4,56,6,7,8]

console.log(mostrarLista(arrayNros));
