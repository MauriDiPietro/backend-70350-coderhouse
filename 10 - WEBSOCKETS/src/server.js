import express from "express";
import path from "path";
import handlebars from "express-handlebars";
import { Server } from "socket.io";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/", express.static(path.join(process.cwd(), "src", "public")));

app.engine("handlebars", handlebars.engine());
app.set("view engine", "handlebars");
app.set("views", path.join(process.cwd(), "src/views"));

app.get("/", (req, res) => {
  res.render("websocket");
});

const httpServer = app.listen(8080, () => {
  console.log(`Server is running on port 8080`);
});

const socketServer = new Server(httpServer);

const arrayProducts = [];

socketServer.on('connection', (socket)=>{
    console.log(`Usuario conectado: ${socket.id}`);
    // console.log(socket);
    socket.on('disconnect', ()=>{
        console.log('usuario desconectado');
    });

    socket.emit('saludoDesdeBack', 'Bienvenido a websockets')

    socket.on('respuestaDesdeFront', (message)=>{
        console.log(message);
    })

    socketServer.emit('arrayProducts', arrayProducts);

    socket.on('newProd', (prod)=>{
        // console.log(prod);
        arrayProducts.push(prod)
        // console.log(arrayProducts);
        socketServer.emit('arrayProducts', arrayProducts)
    })
})