import express from "express";
import userRouter from "./routes/user.router.js";
import productRouter from "./routes/product.router.js";
import cartRouter from "./routes/cart.router.js";
import morgan from 'morgan'

const app = express();

app.use('/static', express.static(`${process.cwd()}/src/public`));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'))

app.use("/users", userRouter);
app.use("/products", productRouter);
app.use("/carts", cartRouter);

// console.log(process.cwd())
app.listen(8080, () => console.log("server ok puerto 8080"));


