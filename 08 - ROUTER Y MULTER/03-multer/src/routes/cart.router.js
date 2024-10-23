import { Router } from "express";
const router = Router();

router.post('/', (res, res)=>{
//crear carrito con id y array products

})

router.get('/:cid', (res, res)=>{
//deveulve el cart por id
})

router.post('/:cid/product/:pid', (res, res)=>{
//verificar si existe el cart enn el json
//verificar si existe el producto en el json de products
//verificar si existe el producto dentro del cart
//si no existe, crear un nuevo objeto producto con el id y cantidad { id, quantity: 1 }
//si existe el prod en el cart, le suman 1 a la cantidad quantity++
})

export default router;
