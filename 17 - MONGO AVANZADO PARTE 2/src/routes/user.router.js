import { Router } from "express";
import * as controllers from "../controllers/user.controllers.js";

const router = Router();

router.get("/all", controllers.getAll);

router.get("/", controllers.getByName);

router.post("/file", controllers.createFileUsers);

router.get("/id/:id", controllers.getById);

router.post("/", controllers.create);

router.put("/update/:id", controllers.update);

router.delete("/:id", controllers.remove);

router.post('/add/:userId/pet/:petId', controllers.addPetToUser);

router.get('/aggregation1', controllers.aggregation1);

router.put('/updatedocs', controllers.updateManyAge);

router.get('/aggregation2', controllers.aggregation2);

export default router;