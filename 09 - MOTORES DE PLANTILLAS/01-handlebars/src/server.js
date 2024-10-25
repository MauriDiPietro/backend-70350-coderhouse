import express from "express";
import handlebars from "express-handlebars";
import path from "path";
import viewsRouter from './routes/views.router.js';
import userRouter from './routes/user.router.js';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(process.cwd(), "src", "public")));

app.engine('handlebars', handlebars.engine());
app.set('views', path.join(process.cwd(), 'src', 'views'));
app.set('view engine', 'handlebars');

app.use('/', viewsRouter);
app.use('/users', userRouter);

// console.log(path.join(process.cwd(), "src", "public"))

app.listen(8080, () => {
  console.log(`Server is running on port 8080`);
});
