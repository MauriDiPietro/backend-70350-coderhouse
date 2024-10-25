import { Router } from "express";
import { cartManager } from "../managers/cart.manager.js";
const router = Router();

router.post("/", async (req, res) => {
  try {
    res.json(await cartManager.createCart());
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
});

router.get("/:idCart", async (req, res) => {
  try {
    const { idCart } = req.params;
    res.json(await cartManager.getCartById(idCart));
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
});

router.post("/:idCart/product/:idProd", async (req, res) => {
  //verificar si existe el cart enn el json
  //verificar si existe el producto en el json de products
  //verificar si existe el producto dentro del cart
  //si no existe, crear un nuevo objeto producto con el id y cantidad { id, quantity: 1 }
  //si existe el prod en el cart, le suman 1 a la cantidad quantity++
  try {
    const { idProd } = req.params;
    const { idCart } = req.params;
    const response = await cartManager.saveProdToCart(idCart, idProd);
    res.json(response);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default router;
