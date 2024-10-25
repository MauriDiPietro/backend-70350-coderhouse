import { Router } from "express";
import userManager from "../managers/user.manager.js";


const router = Router();

router.post('/register', async(req, res)=>{
    try {
       await userManager.createUser(req.body);
       res.redirect('/users'); 
    } catch (error) {
       res.render('error', { message: error.message })
    }
})

export default router;
