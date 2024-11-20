import { Router } from "express";
import * as controllers from "../controllers/user.controllers.js";

const router = Router();

router.get("/all", controllers.getAll);

router.get("/", controllers.getByName);

router.post("/file", controllers.createFileUsers);

router.get("/id/:id", controllers.getById);

router.post("/", controllers.create);

router.put("/:id", controllers.update);

router.delete("/:id", controllers.remove);

router.post('/add/:userId/pet/:petId', controllers.addPetToUser)

export default router;