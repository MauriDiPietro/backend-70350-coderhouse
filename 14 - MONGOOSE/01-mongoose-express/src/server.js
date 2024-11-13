import express from "express";
import productsRouter from "./routes/products.router.js";
import { errorHandler } from "./middlewares/errorHandler.js";
import { initMongoDB } from "./db/db.conection.js";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/products", productsRouter);

app.use(errorHandler);

initMongoDB()
  .then(() => console.log("Conectado a la base de datos de MongoDB"))
  .catch((error) => console.log(error));

const PORT = 8080;

app.listen(PORT, () => console.log(`SERVER UP ON PORT ${PORT}`));
