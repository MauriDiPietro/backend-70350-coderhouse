import { Router } from "express";
import {prodManager} from '../managers/product.manager.js';

const router = Router();

router.get("/", async (req, res) => {
  try {
    const prods = await prodManager.getAll();
    res.status(200).json(prods);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const prod = await prodManager.getById(id);
    res.status(200).json(prod);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
});

router.post("/", async (req, res) => {
  try {
    const prod = await prodManager.create(req.body);
    res.status(201).json(prod);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.delete("/", async (req, res) => {
  try {
    await prodManager.deleteAll();
    res.json({ message: "products deleted ok" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const prodDel = await prodManager.delete(id);
    res.status(200).json({ message: `product id: ${prodDel.id} deleted ok` });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
});

router.put("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const prodUpd = await prodManager.update(req.body, id);
    res.status(200).json(prodUpd);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default router;
