import express from "express";
import { products } from "./products.js";
import userManager from "./user.manager.js";

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  // res.status(200).send('hola')
  res.json(products);
  // res.render('vista')
});

app.get("/products", (req, res) => {
  // console.log(req.body);
  // console.log(req.query);
  const { value } = req.query;
  // console.log(value);
  const productFilter = products.filter((p) => p.price === parseInt(value));
  res.json(productFilter);
  //! _150_  |_BUSCAR_|  --> GET /products?value=150
});

app.get("/users", async (req, res) => {
  try {
    const users = await userManager.getUsers();
    res.json(users);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
});

app.get("/products/:idProd", (req, res) => {
  try {
    console.log(req.params.idProd);
    const { idProd } = req.params;
    const prod = products.find((p) => p.id === idProd);
    if (!prod) res.status(404).json({ msg: "product not found" });
    else res.json(prod);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
});

app.listen(8080, () => console.log("server ok en puerto 8080"));
