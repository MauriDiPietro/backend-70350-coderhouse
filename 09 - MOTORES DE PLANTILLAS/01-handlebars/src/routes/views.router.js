import { Router } from "express";
import userManager from "../managers/user.manager.js";


const router = Router();

router.get("/", (req, res) => {
  res.render("view1");
});

router.get("/view2", (req, res) => {
  res.render("view2");
  // res.render('view2', { layout: 'layout2.handlebars' })
});

router.get("/view3", (req, res) => {
  const user = {
    firstname: "Pedro",
    lastname: "Perez",
  };
  res.render("view3", { user });
});

// const users = [
//   {
//     firstname: "Juan",
//     lastname: "Perez",
//     age: 30,
//     mail: "juan@mail.com",
//     phone: "65458942",
//   },
//   {
//     firstname: "Carlos",
//     lastname: "Perez",
//     age: 30,
//     mail: "car@mail.com",
//     phone: "6767676",
//   },
//   {
//     firstname: "Juana",
//     lastname: "Perez",
//     age: 30,
//     mail: "juani@mail.com",
//     phone: "6577",
//   },
//   {
//     firstname: "Ernestina",
//     lastname: "Perez",
//     age: 30,
//     mail: "ernes@mail.com",
//     phone: "43535",
//   },
// ];

router.get('/actividad', (req, res) => {
    const random = Math.floor(Math.random() * 4);
    const user = users[random];
    res.render('user', { user })
})

router.get('/register', async(req, res)=>{
    res.render('form')
})

router.get('/users', async(req, res) => {
    const users = await userManager.getUsers();
    res.render('users', { users })
})

export default router;
